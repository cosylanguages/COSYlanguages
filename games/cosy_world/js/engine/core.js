/**
 * games/cosy_world/js/engine/core.js
 * Core engine orchestrator that fetches JSON game datasets and coordinates components.
 */

import { SaveSystem } from '../save/save_system.js';
import { StatsManager } from '../player/stats.js';
import { AudioManager } from '../audio/audio.js';
import { SceneRenderer } from '../scenes/scene_renderer.js';
import { InventoryManager } from '../inventory/inventory.js';
import { DialogueManager } from '../dialogue/dialogue.js';
import { QuestManager } from '../quests/quest_manager.js';
import { ModalManager } from '../ui/modal.js';
import { HUDManager } from '../ui/hud.js';

export class GameEngine {
    constructor() {
        this.state = SaveSystem.loadInitialState();
        this.data = {
            languages: [],
            districts: {},
            objects: {},
            npcs: {},
            quests: [],
            grammarTree: []
        };
        this.audio = new AudioManager();
    }

    async init() {
        try {
            await this.loadData();
            this.populateLanguageSelector();
            this.updatePlayerStats();
            this.renderWorldViewport();
            this.renderHudTab();
        } catch (e) {
            console.error('Failed to initialize COSY World Engine:', e);
        }
    }

    async loadData() {
        const basePath = 'data';
        const [languagesRes, districtsRes, objectsRes, npcsRes, questsRes, grammarRes] = await Promise.all([
            fetch(`${basePath}/languages.json`).then(r => r.json()),
            fetch(`${basePath}/scenes/districts.json`).then(r => r.json()),
            fetch(`${basePath}/vocabulary/objects.json`).then(r => r.json()),
            fetch(`${basePath}/npcs/npcs.json`).then(r => r.json()),
            fetch(`${basePath}/quests/quests.json`).then(r => r.json()),
            fetch(`${basePath}/grammar/grammar.json`).then(r => r.json())
        ]);

        this.data.languages = languagesRes;
        this.data.districts = districtsRes;
        this.data.objects = objectsRes;
        this.data.npcs = npcsRes;
        this.data.quests = questsRes;
        this.data.grammarTree = grammarRes;

        // Fallback or window sync for compatibility
        window.COSY_WORLD_DATA = this.data;
    }

    saveState() {
        SaveSystem.saveState(this.state);
    }

    toggleGuidePointers() {
        this.state.showGuidePointers = !this.state.showGuidePointers;
        this.saveState();
        this.renderWorldViewport();
        this.showToast(this.state.showGuidePointers ? 'Visual Guide Pointers ON 👉' : 'Visual Guide Pointers OFF 🕶️');
    }

    toggleTranslations() {
        this.state.showTranslations = !this.state.showTranslations;
        this.saveState();
        this.renderHudTab();
        this.showToast(this.state.showTranslations ? 'Translations ON (Accessibility) 🌐' : 'Direct Immersion Mode ON 🎯');
    }

    populateLanguageSelector() {
        const sel = document.getElementById('cw-lang-sel');
        if (!sel || !this.data.languages) return;

        sel.innerHTML = this.data.languages.map(l => `
            <option value="${l.code}" ${l.code === this.state.currentLang ? 'selected' : ''}>${l.flag} ${l.label}</option>
        `).join('');
    }

    changeLanguage(code) {
        this.state.currentLang = code;
        this.saveState();
        this.renderWorldViewport();
        this.renderHudTab();
        this.showToast(`Target Language: ${code.toUpperCase()} 🌍`);
    }

    updatePlayerStats() {
        StatsManager.updatePlayerStats(this.state);
    }

    addXP(amount) {
        StatsManager.addXP(this.state, amount, (msg) => this.showToast(msg));
        this.saveState();
    }

    switchLocation(locationId) {
        const loc = this.data.districts[locationId];
        if (!loc) return;

        this.state.currentLocationId = locationId;
        this.saveState();
        this.renderWorldViewport();
        this.showToast(`Entered ${loc.name[this.state.currentLang] || loc.name.en} 🚪`);
    }

    renderWorldViewport() {
        SceneRenderer.renderWorldViewport(this.state, this.data);
    }

    inspectObject(objId) {
        InventoryManager.inspectObject(
            objId,
            this.state,
            this.data,
            (amount) => this.addXP(amount),
            () => this.checkQuests(),
            (text, lang) => this.speakText(text, lang),
            () => this.openModal(),
            () => this.renderWorldViewport(),
            () => this.renderHudTab()
        );
    }

    triggerActionChain(objId) {
        const obj = this.data.objects[objId];
        if (!obj || !obj.actionChain) return;

        this.showToast(`Action Triggered: ${obj.actionChain.actionIcon}! ✨`);
        this.closeModal();

        if (obj.actionChain.nextObject === 'door_lock') {
            this.completeQuest('q1_key_door');
        }
    }

    interactNPC(npcId) {
        DialogueManager.interactNPC(
            npcId,
            this.state,
            this.data,
            () => this.openModal()
        );
    }

    handleDialogueOption(npcId, questId) {
        if (questId && this.data.quests.find(q => q.id === questId)) {
            if (!this.state.completedQuests.has(questId)) {
                this.state.activeQuests.add(questId);
                this.completeQuest(questId);
            }
        }
        this.closeModal();
    }

    completeQuest(questId) {
        QuestManager.completeQuest(
            questId,
            this.state,
            this.data,
            (amount) => this.addXP(amount),
            () => this.saveState(),
            () => this.renderHudTab(),
            (msg) => this.showToast(msg)
        );
    }

    checkQuests() {
        QuestManager.checkQuests(
            this.state,
            this.data,
            (qid) => this.completeQuest(qid)
        );
    }

    speakText(text, lang) {
        this.audio.speakText(text, lang);
    }

    playAmbience(type) {
        this.audio.playAmbience(type);
    }

    switchTab(tabName, btnEl) {
        HUDManager.switchTab(tabName, btnEl, this.state, () => this.renderHudTab());
    }

    renderHudTab() {
        HUDManager.renderHudTab(this.state, this.data, (objId) => this.inspectObject(objId));
    }

    openModal() {
        ModalManager.openModal();
    }

    closeModal() {
        ModalManager.closeModal();
    }

    showToast(msg) {
        HUDManager.showToast(msg);
    }
}

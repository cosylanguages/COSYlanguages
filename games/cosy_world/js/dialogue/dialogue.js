/**
 * games/cosy_world/js/dialogue/dialogue.js
 * NPC gesture dialogue rendering, relationship progression (+10 FP per chat), voice speech triggers, and shop inventory interactions.
 */

export class DialogueManager {
    static interactNPC(npcId, state, gameData, openModalFn) {
        const npc = gameData.npcs[npcId];
        if (!npc) return;

        // Increase friendship points on interaction
        state.npcRelationships[npcId] = (state.npcRelationships[npcId] || 0) + 10;
        const currentFP = state.npcRelationships[npcId];
        const currentLvl = Math.floor(currentFP / 50) + 1;

        const lang = state.currentLang;
        const dialogues = (npc.dialogues && npc.dialogues[lang]) || npc.dialogues.en || [];
        const dlg = dialogues[0] || { text: '👋 Hello!', options: [] };

        const body = document.getElementById('cw-modal-body');
        if (body) {
            body.innerHTML = `
                <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
                    <div style="font-size:3rem; background:var(--tan-light); padding:0.5rem; border-radius:50%; border:2px solid var(--border);">${npc.portrait || npc.avatar}</div>
                    <div style="flex:1;">
                        <div style="display:flex; align-items:center; justify-content:space-between;">
                            <h2 style="font-family:'Fraunces',serif; font-size:1.5rem; color:var(--ink); margin:0;">${npc.name}</h2>
                            <span style="font-size:0.8rem; background:#fef3c7; color:#b45309; padding:0.25rem 0.6rem; border-radius:12px; font-weight:700;">❤️ Level ${currentLvl} (${currentFP} FP)</span>
                        </div>
                        <div style="font-size:0.85rem; color:var(--teal); font-weight:700; margin-top:0.2rem;">${npc.role}</div>
                        ${npc.teachingRole ? `<div style="font-size:0.8rem; color:var(--ink-muted); italic;">🎓 ${npc.teachingRole}</div>` : ''}
                    </div>
                </div>

                <div class="cw-item-card" style="font-size:1.15rem; font-weight:600; line-height:1.5; color:var(--ink); margin-bottom:1rem; text-align:center;">
                    "${dlg.text}"
                </div>

                ${dlg.visualAction ? `
                    <div style="text-align:center; font-size:1.5rem; margin-bottom:1rem; padding:0.5rem; background:#f0fdf4; border-radius:12px; border:1px solid #10b981;">
                        ${dlg.visualAction}
                    </div>
                ` : ''}

                ${npc.shopInventory && npc.shopInventory.length > 0 ? `
                    <div style="margin-bottom:1rem; padding:0.75rem; background:var(--tan-light); border-radius:12px; border:1px solid var(--border);">
                        <div style="font-weight:700; font-size:0.9rem; color:var(--ink); margin-bottom:0.5rem;">🛍️ Shop Inventory</div>
                        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                            ${npc.shopInventory.map(item => `
                                <div style="background:white; padding:0.4rem 0.75rem; border-radius:10px; border:1px solid var(--border); font-size:0.85rem; font-weight:700;">
                                    ${item.emoji} ${item.name} (${item.price} XP)
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <div>
                    ${dlg.options.map(opt => `
                        <button class="btn-g-primary" type="button" style="width:100%; margin-bottom:0.5rem; font-size:1.05rem;" onclick="COSY_WORLD.handleDialogueOption('${npcId}', '${opt.questId || ''}')">
                            ${opt.label}
                        </button>
                    `).join('')}
                </div>
            `;
        }

        if (openModalFn) openModalFn();
    }
}

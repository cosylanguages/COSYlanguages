/**
 * games/cosy_world/js/dialogue/dialogue.js
 * NPC gesture dialogue rendering and choice handling.
 */

export class DialogueManager {
    static interactNPC(npcId, state, gameData, openModalFn) {
        const npc = gameData.npcs[npcId];
        if (!npc) return;

        const lang = state.currentLang;
        const dialogues = (npc.dialogues && npc.dialogues[lang]) || npc.dialogues.en || [];
        const dlg = dialogues[0] || { text: '👋 Hello!', options: [] };

        const body = document.getElementById('cw-modal-body');
        if (body) {
            body.innerHTML = `
                <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.25rem;">
                    <div style="font-size:3rem; background:var(--tan-light); padding:0.5rem; border-radius:50%; border:2px solid var(--border);">${npc.avatar}</div>
                    <div>
                        <h2 style="font-family:'Fraunces',serif; font-size:1.5rem; color:var(--ink); margin:0;">${npc.name}</h2>
                        <div style="font-size:0.85rem; color:var(--teal); font-weight:700;">${npc.role}</div>
                    </div>
                </div>

                <div class="cw-item-card" style="font-size:1.15rem; font-weight:600; line-height:1.5; color:var(--ink); margin-bottom:1rem; text-align:center;">
                    "${dlg.text}"
                </div>

                ${dlg.visualAction ? `
                    <div style="text-align:center; font-size:1.5rem; margin-bottom:1.25rem; padding:0.5rem; background:#f0fdf4; border-radius:12px; border:1px solid #10b981;">
                        ${dlg.visualAction}
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

/**
 * games/cosy_world/js/scenes/scene_renderer.js
 * SVG scene and interactive stage rendering component for COSY World.
 */

export class SceneRenderer {
    static renderWorldViewport(state, gameData) {
        const svg = document.getElementById('cw-world-svg');
        const titleEl = document.getElementById('cw-location-title');
        const districtEl = document.getElementById('cw-district-name');

        if (!svg || !gameData) return;

        const loc = gameData.districts[state.currentLocationId];
        if (!loc) return;

        const lang = state.currentLang;
        if (titleEl) titleEl.textContent = `${loc.icon} ${loc.name[lang] || loc.name.en}`;
        if (districtEl) districtEl.textContent = loc.district;

        let html = `
            <!-- Background Wall & Floor -->
            <rect x="0" y="0" width="800" height="340" fill="#f5f0eb" />
            <rect x="0" y="340" width="800" height="160" fill="#e8ded1" />
            <line x1="0" y1="340" x2="800" y2="340" stroke="#d4c5b3" stroke-width="4" />
        `;

        // Draw Doors / Portals
        if (loc.doors) {
            loc.doors.forEach(d => {
                const doorLabel = d.labels[lang] || d.labels.en || 'Door';
                html += `
                    <g class="cw-door-portal" onclick="COSY_WORLD.switchLocation('${d.targetId}')">
                        <rect x="${d.x}" y="${d.y}" width="${d.width}" height="${d.height}" rx="6" />
                        <rect x="${d.x + 5}" y="${d.labelY || d.y - 25}" width="${d.width - 10}" height="22" rx="4" fill="#1e293b" />
                        <text x="${d.x + d.width / 2}" y="${(d.labelY || d.y - 25) + 15}" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">${doorLabel}</text>
                    </g>
                `;
            });
        }

        // Draw Objects with Action Pointers
        if (loc.objects) {
            loc.objects.forEach((objId, idx) => {
                const obj = gameData.objects[objId];
                if (!obj) return;
                const word = obj.words[lang] || obj.words.en || objId;
                const isDiscovered = state.discoveredObjects.has(objId);

                html += `
                    <g class="cw-obj-hotspot" onclick="COSY_WORLD.inspectObject('${objId}')">
                        <rect class="hit-box" x="${obj.x}" y="${obj.y}" width="${obj.width}" height="${obj.height}" />
                        <text x="${obj.x + obj.width / 2}" y="${obj.y + obj.height / 2 + 8}" font-size="28" text-anchor="middle">${obj.emoji}</text>

                        ${state.showGuidePointers && idx === 0 && !isDiscovered ? `
                            <text x="${obj.x + obj.width / 2}" y="${obj.y - 12}" font-size="20" text-anchor="middle" class="cw-hand-pointer">👇</text>
                        ` : ''}

                        <rect x="${obj.labelX - word.length * 4 - 8}" y="${obj.labelY - 14}" width="${word.length * 8 + 16}" height="20" rx="10" fill="${isDiscovered ? '#10b981' : '#1e293b'}" opacity="0.9" />
                        <text x="${obj.labelX}" y="${obj.labelY}" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">${word}</text>
                    </g>
                `;
            });
        }

        // Draw NPCs with Gestures
        if (loc.npcs) {
            loc.npcs.forEach((npcId, idx) => {
                const npc = gameData.npcs[npcId];
                if (!npc) return;
                const posX = 200 + idx * 150;
                const posY = 300;

                html += `
                    <g class="cw-npc-hotspot" onclick="COSY_WORLD.interactNPC('${npcId}')">
                        <circle class="npc-hit" cx="${posX}" cy="${posY}" r="32" />
                        <text x="${posX}" y="${posY + 10}" font-size="32" text-anchor="middle">${npc.avatar}</text>

                        ${state.showGuidePointers ? `
                            <text x="${posX + 25}" y="${posY - 20}" font-size="18" text-anchor="middle">💬</text>
                        ` : ''}

                        <rect x="${posX - 40}" y="${posY + 38}" width="80" height="20" rx="10" fill="#f59e0b" />
                        <text x="${posX}" y="${posY + 52}" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">${npc.name}</text>
                    </g>
                `;
            });
        }

        svg.innerHTML = html;
    }
}

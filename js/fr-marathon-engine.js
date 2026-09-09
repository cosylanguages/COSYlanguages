/* COSY French Pronunciation Marathon Shared Engine */

const MP_PALETTE = {
  paper: "#FBF7EE",
  ink: "#232A3B",
  inkSoft: "#4B5468",
  red: "#A5382B",
  redSoft: "#C9584A",
  blue: "#7C93A8",
  green: "#2d6a4f",
  gold: "#d4af37"
};

function escSvg(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function svgWrap(w, h, inner) {
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" font-family="'Nunito', sans-serif" style="width:100%; height:auto; display:block; border-radius:8px;">
  <rect x="0" y="0" width="${w}" height="${h}" fill="${MP_PALETTE.paper}"/>
  ${inner}
  </svg>`;
}

function visualGrapheme(v) {
  const w = 640, h = 220;
  const words = v.words || [];
  const wCount = words.length;
  const wordsY = 175;
  let wordEls = words.map((word, i) => {
    const x = wCount === 1 ? w / 2 : 60 + i * ((w - 120) / Math.max(1, wCount - 1));
    return `<text x="${x}" y="${wordsY}" text-anchor="middle" font-size="18" font-weight="600" fill="${MP_PALETTE.ink}">${escSvg(word)}</text>`;
  }).join("");

  return svgWrap(w, h, `
    <line x1="30" y1="120" x2="${w - 30}" y2="120" stroke="${MP_PALETTE.blue}" stroke-width="1"/>
    <text x="${w / 2}" y="75" text-anchor="middle" font-family="'Lora', Georgia, serif" font-size="48" font-weight="700" fill="${MP_PALETTE.red}" letter-spacing="2">${escSvg(v.main)}</text>
    <rect x="${w / 2 - 60}" y="98" width="120" height="30" rx="15" fill="none" stroke="${MP_PALETTE.green}" stroke-width="1.5"/>
    <text x="${w / 2}" y="118" text-anchor="middle" font-style="italic" font-size="15" font-weight="700" fill="${MP_PALETTE.green}">${escSvg(v.ipa || "")}</text>
    ${wordEls}
    <text x="${w / 2}" y="202" text-anchor="middle" font-size="12" fill="${MP_PALETTE.inkSoft}" letter-spacing="1">EXEMPLES</text>
  `);
}

function visualAlphabet() {
  const w = 640, h = 180;
  const rows = ["A B C D E F G H I J K L M", "N O P Q R S T U V W X Y Z"];
  let els = rows.map((row, ri) => {
    const letters = row.split(" ");
    return letters.map((l, i) => {
      const x = 35 + i * 44;
      const y = 80 + ri * 60;
      return `<text x="${x}" y="${y}" text-anchor="middle" font-size="22" font-weight="700" fill="${ri === 0 ? MP_PALETTE.red : MP_PALETTE.ink}">${l}</text>`;
    }).join("");
  }).join("");

  return svgWrap(w, h, `
    <text x="${w / 2}" y="32" text-anchor="middle" font-style="italic" font-size="13" fill="${MP_PALETTE.inkSoft}">26 lettres, un nom fixe pour l'épellation, des sons selon le contexte</text>
    ${els}
  `);
}

function visualContrast(v) {
  const w = 640, h = 230;
  const col = (x0, label, ipa, words, accent) => {
    let items = (words || []).map((word, i) => `<text x="${x0}" y="${145 + i * 26}" font-size="17" font-weight="600" fill="${MP_PALETTE.ink}">${escSvg(word)}</text>`).join("");
    return `
      <text x="${x0}" y="55" font-family="'Lora', Georgia, serif" font-size="22" font-weight="700" fill="${accent}">${escSvg(label)}</text>
      <rect x="${x0}" y="70" width="100" height="26" rx="13" fill="none" stroke="${accent}" stroke-width="1.5"/>
      <text x="${x0 + 12}" y="88" font-style="italic" font-size="14" font-weight="700" fill="${accent}">${escSvg(ipa)}</text>
      ${items}
    `;
  };

  return svgWrap(w, h, `
    <line x1="${w / 2}" y1="25" x2="${w / 2}" y2="${h - 20}" stroke="${MP_PALETTE.blue}" stroke-width="1.5" stroke-dasharray="5,5"/>
    ${col(60, v.leftLabel, v.leftIpa, v.leftWords, MP_PALETTE.green)}
    ${col(w / 2 + 60, v.rightLabel, v.rightIpa, v.rightWords, MP_PALETTE.red)}
  `);
}

function visualFlow(v) {
  const w = 640;
  const steps = v.steps || [];
  const boxH = 50, gap = 20;
  const h = steps.length * boxH + (steps.length - 1) * gap + 40;
  let els = steps.map((s, i) => {
    const y = 20 + i * (boxH + gap);
    const arrow = i < steps.length - 1 ? `<line x1="${w / 2}" y1="${y + boxH}" x2="${w / 2}" y2="${y + boxH + gap}" stroke="${MP_PALETTE.ink}" stroke-width="1.5" marker-end="url(#arrow)"/>` : "";
    return `
      <rect x="50" y="${y}" width="${w - 100}" height="${boxH}" rx="6" fill="#ffffff" stroke="${MP_PALETTE.ink}" stroke-width="1.5"/>
      <text x="${w / 2}" y="${y + boxH / 2 + 5}" text-anchor="middle" font-size="15" font-weight="600" fill="${MP_PALETTE.ink}">${escSvg(s)}</text>
      ${arrow}
    `;
  }).join("");

  return svgWrap(w, h, `
    <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${MP_PALETTE.red}"/></marker></defs>
    ${els}
  `);
}

function visualMorph(v) {
  const w = 640;
  const rows = v.rows || [];
  const rowH = 36;
  const h = 60 + rows.length * rowH + 20;
  let rowEls = rows.map((r, i) => {
    const y = 80 + i * rowH;
    return `
      <text x="60" y="${y}" font-style="italic" font-size="14" fill="${MP_PALETTE.inkSoft}">${escSvg(r[0])}</text>
      <text x="240" y="${y}" font-size="17" fill="${i === 0 ? MP_PALETTE.red : MP_PALETTE.ink}" font-weight="${i === 0 ? 700 : 600}">${escSvg(r[1])}</text>
      <line x1="60" y1="${y + 10}" x2="${w - 40}" y2="${y + 10}" stroke="${MP_PALETTE.blue}" stroke-width="0.6" stroke-dasharray="2,4"/>
    `;
  }).join("");

  return svgWrap(w, h, `
    <text x="${w / 2}" y="35" text-anchor="middle" font-family="'Lora', Georgia, serif" font-size="26" font-weight="700" fill="${MP_PALETTE.gold}">${escSvg(v.suffix)}</text>
    <text x="${w / 2}" y="54" text-anchor="middle" font-style="italic" font-size="12" fill="${MP_PALETTE.inkSoft}">Logique interlinguistique (racine / suffixe commun)</text>
    ${rowEls}
  `);
}

function buildVisual(v) {
  if (!v) return "";
  switch (v.type) {
    case "grapheme": return visualGrapheme(v);
    case "alphabet": return visualAlphabet();
    case "contrast": return visualContrast(v);
    case "flow": return visualFlow(v);
    case "morph": return visualMorph(v);
    default: return "";
  }
}

function renderVisualFrames() {
  document.querySelectorAll(".visual-frame[data-visual]").forEach(frame => {
    try {
      const data = JSON.parse(frame.getAttribute("data-visual"));
      if (data) {
        frame.innerHTML = buildVisual(data);
      }
    } catch (e) {
      console.error("Error parsing visual data:", e);
    }
  });
}

/* Progress Tracking in localStorage */
function initMarathonProgress() {
  renderVisualFrames();

  const STORAGE_KEY = "cosy_fr_marathon_progress";
  let progress = {};
  try {
    progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch(e) {
    progress = {};
  }

  const total = document.querySelectorAll(".lesson-sample").length;
  if (total === 0) return;

  const currentPath = window.location.pathname;
  let pageSeen = progress[currentPath] || [];

  const updateUI = () => {
    const count = pageSeen.length;
    const fill = document.getElementById("progress-fill");
    const countLabel = document.getElementById("progress-count");
    if (fill) fill.style.width = `${Math.min(100, Math.round((count / total) * 100))}%`;
    if (countLabel) countLabel.textContent = `${count} / ${total} leçons`;
  };

  document.querySelectorAll(".lesson-sample").forEach((sample, idx) => {
    const lessonId = `lesson_${idx}`;
    const header = sample.querySelector(".lesson-sample-header");
    if (header && !header.querySelector(".lesson-check")) {
      const checkBtn = document.createElement("button");
      checkBtn.className = "lesson-check";
      checkBtn.style.cssText = "float:right; background:rgba(255,255,255,0.2); border:1px solid #fff; color:#fff; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.8rem; cursor:pointer; font-weight:700;";

      const isSeen = pageSeen.includes(lessonId);
      checkBtn.textContent = isSeen ? "✓ Lu" : "+ Marquer lu";
      if (isSeen) checkBtn.style.background = "#ffffff", checkBtn.style.color = "#1b4332";

      checkBtn.addEventListener("click", () => {
        if (pageSeen.includes(lessonId)) {
          pageSeen = pageSeen.filter(id => id !== lessonId);
          checkBtn.textContent = "+ Marquer lu";
          checkBtn.style.background = "rgba(255,255,255,0.2)";
          checkBtn.style.color = "#ffffff";
        } else {
          pageSeen.push(lessonId);
          checkBtn.textContent = "✓ Lu";
          checkBtn.style.background = "#ffffff";
          checkBtn.style.color = "#1b4332";
        }
        progress[currentPath] = pageSeen;
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } catch(e) {}
        updateUI();
      });

      header.appendChild(checkBtn);
    }
  });

  updateUI();
}

document.addEventListener("DOMContentLoaded", initMarathonProgress);

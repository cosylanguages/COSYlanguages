<script>
/* ─── TOGGLE HELPERS ──────────────────────────────────────────── */
function toggleRound(id) { document.getElementById(id).classList.toggle('open'); }
function toggleBlock(id) { document.getElementById(id).classList.toggle('open'); }

/* ─── DICTIONARY ────────────────────────────────────────────────
   Persistence: uses localStorage['cosy_events_dict'] per user
─────────────────────────────────────────────────────────────────  */
let dictPanelOpen = false;
let dictionary = {}; // { word: definition }

function getDictKey() {
  const mode = window.COSY?.mode || 'free';
  const user = window.COSY?.student?.code || window.COSY?.teacher?.code || 'guest';
  return `cosy_dict_${mode}_${user}`;
}

function loadDict() {
  const key = getDictKey();
  const saved = localStorage.getItem(key);
  dictionary = saved ? JSON.parse(saved) : {};
  refreshDictUI();
  refreshVocabButtons();
}

function saveDict() {
  const key = getDictKey();
  localStorage.setItem(key, JSON.stringify(dictionary));
}

function addToDict(word, def, btn) {
  if (window.COSY?.mode === 'free') {
    COSY.showModePanel();
    return;
  }
  if (dictionary[word]) {
    btn.textContent = '✓ Saved';
    btn.classList.add('saved');
    return;
  }
  dictionary[word] = def;
  saveDict();
  btn.textContent = '✓ Saved';
  btn.classList.add('saved');
  refreshDictUI();
}

function removeFromDict(word) {
  delete dictionary[word];
  saveDict();
  refreshDictUI();
  refreshVocabButtons();
}

function refreshDictUI() {
  const count = Object.keys(dictionary).length;
  const countEl = document.getElementById('dict-count');
  if (countEl) countEl.textContent = count;

  const body = document.getElementById('dict-body');
  const empty = document.getElementById('dict-empty-msg');
  if (!body) return;

  body.querySelectorAll('.dict-entry').forEach(e => e.remove());
  if (count === 0) {
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  Object.entries(dictionary).forEach(([word, def]) => {
    const el = document.createElement('div');
    el.className = 'dict-entry';
    el.innerHTML = `<div><div class="dict-entry-word">${word}</div><div class="dict-entry-def">${def}</div></div><button class="dict-remove" onclick="removeFromDict('${word.replace(/'/g,"\\'")}')">✕</button>`;
    body.appendChild(el);
  });
}

function refreshVocabButtons() {
  document.querySelectorAll('.vocab-add-btn').forEach(btn => {
    const word = btn.getAttribute('onclick').match(/addToDict\('([^']+)'/)?.[1];
    if (word && dictionary[word]) {
      btn.textContent = '✓ Saved';
      btn.classList.add('saved');
    } else {
      btn.classList.remove('saved');
      if (word && !dictionary[word]) btn.textContent = '+ Dictionary';
    }
  });
}

function toggleDict() {
  dictPanelOpen = !dictPanelOpen;
  const panel = document.getElementById('dict-panel');
  const fab = document.getElementById('dict-fab');
  panel.style.display = dictPanelOpen ? 'flex' : 'none';
  fab.style.display = dictPanelOpen ? 'none' : 'block';
}

function exportDict() {
  const lines = Object.entries(dictionary).map(([w,d]) => `${w} — ${d}`).join('\n');
  const blob = new Blob(['MY COSY DICTIONARY\n\n' + lines], {type:'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'cosy-dictionary.txt';
  a.click();
}

// Handle Mode Changes
document.addEventListener('cosyModeChanged', () => {
  loadDict();
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
  loadDict();
});
</script>

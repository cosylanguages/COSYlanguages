import os, json

def build_vocab_html(vocab_list):
    cards = []
    for v in vocab_list:
        word = v['word']
        phonetic = v.get('phonetic', '')
        pos = v.get('pos', 'n.')
        definition = v['definition']
        example = v['example']
        antonym = v.get('antonym', '')

        phon_html = f'<span class="text-xs text-gray-500 font-mono ml-1">{phonetic}</span>' if phonetic else ''
        ant_html = f'<div class="text-xs text-gray-500 mt-1"><strong>≠ Antonym:</strong> {antonym}</div>' if antonym else ''

        clean_word = word.replace("'", "\\'")
        clean_def = definition.replace("'", "\\'")
        clean_ex = example.replace("'", "\\'")

        cards.append(f'''
        <div class="vocab-card bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-baseline justify-between mb-1">
              <h4 class="text-base font-bold text-gray-900">{word} {phon_html}</h4>
              <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">[{pos}]</span>
            </div>
            <p class="text-xs text-gray-700 mb-2 leading-relaxed">{definition}</p>
            <p class="text-xs italic text-gray-600 bg-gray-50 p-2 rounded border-l-2 border-emerald-400">"{example}"</p>
            {ant_html}
          </div>
          <button class="btn-add-dict mt-3 w-full py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded border border-emerald-200 transition-colors" onclick="COSY.addToDict({{word:'{clean_word}', definition:'{clean_def}', example:'{clean_ex}'}}, this)">
            ➕ Add to Dictionary
          </button>
        </div>''')
    return '\n'.join(cards)

def build_units_html(unit_list, start_idx=1):
    items = []
    for idx, u in enumerate(unit_list, start_idx):
        items.append(f'''
        <div class="round-item p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div class="round-item-main text-sm font-semibold text-gray-900 mb-2"><strong>{idx}.</strong> {u['main']}</div>
          <div class="round-item-personal text-xs text-emerald-800 bg-emerald-50 p-2 rounded border-l-2 border-emerald-500">★ {u['personal']}</div>
        </div>''')
    return '\n'.join(items)

print("Helper ready")

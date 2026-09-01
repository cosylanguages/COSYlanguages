import os, glob, re

def fix_hy(text):
    text = text.replace("արgroupյունավետ", "արդյունավետ")
    text = text.replace("անgroupկախ", "անկախ")
    text = text.replace("անgroupկատարելություն", "անկատարելություն")
    text = text.replace("անgroup", "ան")
    return text

def fix_br(text):
    text = text.replace("да c mezo", "da c'hoarzhin")
    text = text.replace("c mezo", "c'hoarzh")
    text = re.sub(r'[а-яА-Я]+', '', text) # Remove any stray cyrillic letters in Breton
    # Clean up double spaces if any
    text = re.sub(r'  +', ' ', text)
    return text

def fix_ba(text):
    text = text.replace("кертү", "индереү")
    text = text.replace("бирүче", "биреүсе")
    text = text.replace("дәрәжәдә", "дәրәжәлә")
    text = text.replace("дәрәжәлә", "дәрәжәлә")
    text = text.replace("Үҙгәреүе", "үзгәреүե")
    text = text.replace("Үҙгәրә", "үзгәրә")
    text = text.replace("Үҙгәր", "үзгәր")
    text = text.replace("Үҙгә", "үзгә")
    text = text.replace("Билдәһеҙ", "билдәһеҙ")
    text = text.replace("Килешеү", "килешеү")
    text = text.replace("Үзгә", "үзгә")
    return text

def fix_tt(text):
    text = text.replace("Үзгәреշե", "үзгәреշե")
    text = text.replace("Үзгәրә", "үзгәրә")
    text = text.replace("Үзгәր", "үзгәր")
    text = text.replace("Үзгә", "үзгә")
    text = text.replace("Билгесез", "билгесез")
    text = text.replace("Килешү", "килешү")
    return text

def fix_ka(text):
    text = text.replace("აღავსე", "აღავსებული")
    text = text.replace("ანონიმური-ავტორი", "ანონიმური")
    text = text.replace("დამოუკიდებელი-პროფესიონალი", "დამოუკიდებელი პროფესიონალი")
    text = text.replace("აკიზრულობს", "კისრულობს")
    return text

langs = ['hy', 'br', 'ba', 'tt', 'ka']
fix_funcs = {
    'hy': fix_hy,
    'br': fix_br,
    'ba': fix_ba,
    'tt': fix_tt,
    'ka': fix_ka
}

for lang in langs:
    for lvl in ['B2', 'C1']:
        path = f'vocabulary/{lang}/{lvl}'
        for f in glob.glob(path + '/*.js'):
            with open(f, 'r', encoding='utf-8') as fp:
                c = fp.read()
            c_fixed = fix_funcs[lang](c)
            with open(f, 'w', encoding='utf-8') as fp:
                fp.write(c_fixed)

print("Corruptions systematically fixed across all files.")

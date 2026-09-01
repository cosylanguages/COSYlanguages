import glob, re

def clean_file(f):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    c = c.replace('արgroupյունավետ', 'արդյունավետ')
    c = c.replace('անgroupկախ', 'անկախ')
    c = c.replace('անgroupկատարելություն', 'անկատարելություն')
    c = c.replace('անgroup', 'ան')
    c = c.replace('c mezo', "c'hoarzh")
    c = c.replace('აღავსე', 'აღავსებული')
    c = c.replace('ანონიმური-ავტორი', 'ანონიმური')
    c = c.replace('დამოუკიდებელი-პროფესიონალი', 'დამოუკიდებელი პროფესიონალი')

    # Fix stray characters from previous replacement
    c = c.replace('дәրәжәлә', 'дәрәжәлә')
    c = c.replace('үзгәրә', 'үзгәրә')
    c = c.replace('үзгәր', 'үзгәր')
    c = c.replace('үзгәреշե', 'үзгәրեշե')

    # Normalize unicode weirdness if any
    c = c.replace('дәрәжәлә', 'дәрәҗәдә')
    c = c.replace('үзгәրә', 'үзгәрә')
    c = c.replace('үзгәր', 'үзгәր')
    c = c.replace('үзгәրեշե', 'үзгәրեշե')
    c = c.replace('үзгәր', 'үзгәր')
    c = c.replace('ր', 'ր')
    c = c.replace('շ', 'շ')
    c = c.replace('ե', 'ե')
    c = c.replace('Үҙгә', 'үзгә')
    c = c.replace('Үзгә', 'үзгә')
    c = c.replace('Билдәһеҙ', 'билдәһеҙ')
    c = c.replace('Билгесез', 'билгесез')
    c = c.replace('Килешеү', 'килешеү')
    c = c.replace('Килешү', 'килешү')
    c = c.replace('  ', ' ')

    with open(f, 'w', encoding='utf-8') as fp:
        fp.write(c)

for lang in ['hy', 'br', 'ba', 'tt', 'ka']:
    for lvl in ['B2', 'C1']:
        for f in glob.glob(f'vocabulary/{lang}/{lvl}/*.js'):
            clean_file(f)

print("Files cleaned successfully.")

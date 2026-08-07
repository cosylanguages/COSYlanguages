import os
from bs4 import BeautifulSoup

def get_linked_files(index_path):
    with open(index_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    links = []
    for a in soup.find_all('a'):
        href = a.get('href', '')
        if 'sessions/keeping-up-with-science/' in href:
            filename = href.split('sessions/keeping-up-with-science/')[-1]
            links.append(filename)
    return set(links)

def main():
    index_path = 'events/keeping-up-with-science.html'
    linked = get_linked_files(index_path)

    dir_path = 'events/sessions/keeping-up-with-science'
    all_files = set([f for f in os.listdir(dir_path) if f.endswith('.html') and not f.startswith('template')])

    print(f"Total linked files in main EN page: {len(linked)}")
    print(f"Total files in directory: {len(all_files)}")

    unlinked = all_files - linked
    print(f"Unlinked files ({len(unlinked)}):")
    for u in sorted(unlinked):
        print(f"  - {u}")

    mispelled = linked - all_files
    print(f"Linked but not in directory ({len(mispelled)}):")
    for m in sorted(mispelled):
        print(f"  - {m}")

if __name__ == '__main__':
    main()

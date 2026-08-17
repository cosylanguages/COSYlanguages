import os
from bs4 import BeautifulSoup

def remediate_arletta():
    index_path = "apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/el/arletta-challenge/index.html"
    kapoies_path = "apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/el/arletta-challenge/kapoies-nychtes.html"
    gatos_path = "apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/el/arletta-challenge/o-gatos.html"

    with open(index_path, "r", encoding="utf-8") as f:
        index_soup = BeautifulSoup(f.read(), "html.parser")

    options = index_soup.find_all("vim-choice-option")
    if len(options) < 2:
        print("Error: Could not find 2 options in index.html")
        return

    # Option 0: Kapoies Nychtes
    # Option 1: O Gatos

    def update_standalone(filepath, option_elem, level_str, level_greek):
        with open(filepath, "r", encoding="utf-8") as f:
            file_soup = BeautifulSoup(f.read(), "html.parser")

        # Update level in header if needed
        hero_p = file_soup.find("header", class_="session-hero").find("p")
        if hero_p:
            parts = hero_p.text.split("•")
            hero_p.string = f"{parts[0].strip()} • {level_str}"

        # Update level in meta item
        meta_items = file_soup.find_all("div", class_="meta-item")
        for item in meta_items:
            h4 = item.find("h4")
            if h4 and "Επίπεδο" in h4.text:
                item.find("p").string = level_greek

        # Replace theme-box
        idx_theme = option_elem.find("div", class_="theme-box")
        file_theme = file_soup.find("div", class_="theme-box")
        if idx_theme and file_theme:
            file_theme.replace_with(BeautifulSoup(str(idx_theme), "html.parser"))

        # Replace vocab
        idx_vocab = option_elem.find("div", id=lambda x: x and "vocabulary" in x)
        file_vocab = file_soup.find("div", id="vocabulary")
        if idx_vocab and file_vocab:
            # Fix id to 'vocabulary'
            new_vocab_soup = BeautifulSoup(str(idx_vocab), "html.parser")
            block = new_vocab_soup.find("div", class_="round-block")
            if block:
                block["id"] = "vocabulary"
                header = block.find("div", class_="round-header")
                if header:
                    header["onclick"] = "COSY.toggleRound('vocabulary')"
            file_vocab.replace_with(new_vocab_soup)

        # Replace listening
        idx_listening = option_elem.find("div", id=lambda x: x and "listening" in x)
        file_listening = file_soup.find("div", id="listening-exercise")
        if idx_listening and file_listening:
            new_listening_soup = BeautifulSoup(str(idx_listening), "html.parser")
            block = new_listening_soup.find("div", class_="round-block")
            if block:
                block["id"] = "listening-exercise"
                header = block.find("div", class_="round-header")
                if header:
                    header["onclick"] = "COSY.toggleRound('listening-exercise')"
            file_listening.replace_with(new_listening_soup)

        # Replace discussion
        idx_disc = option_elem.find("div", id=lambda x: x and "discussion" in x)
        file_disc = file_soup.find("div", id="discussion")
        if idx_disc and file_disc:
            new_disc_soup = BeautifulSoup(str(idx_disc), "html.parser")
            block = new_disc_soup.find("div", class_="round-block")
            if block:
                block["id"] = "discussion"
                header = block.find("div", class_="round-header")
                if header:
                    header["onclick"] = "COSY.toggleRound('discussion')"
            file_disc.replace_with(new_disc_soup)

        # Replace lang-focus
        idx_lf = option_elem.find("div", id=lambda x: x and "lang-focus" in x)
        file_lf = file_soup.find("div", id="lang-focus")
        if idx_lf and file_lf:
            new_lf_soup = BeautifulSoup(str(idx_lf), "html.parser")
            block = new_lf_soup.find("div", class_="round-block")
            if block:
                block["id"] = "lang-focus"
                header = block.find("div", class_="round-header")
                if header:
                    header["onclick"] = "COSY.toggleRound('lang-focus')"
            file_lf.replace_with(new_lf_soup)

        # Replace final-challenge
        idx_fc = option_elem.find("div", id=lambda x: x and "final-challenge" in x)
        file_fc = file_soup.find("div", id="final-challenge")
        if idx_fc and file_fc:
            new_fc_soup = BeautifulSoup(str(idx_fc), "html.parser")
            block = new_fc_soup.find("div", class_="round-block")
            if block:
                block["id"] = "final-challenge"
                header = block.find("div", class_="round-header")
                if header:
                    header["onclick"] = "COSY.toggleRound('final-challenge')"
            file_fc.replace_with(new_fc_soup)

        # Replace teacher notes / mistakes
        idx_mistakes = option_elem.find("div", class_="mistake-block")
        file_mistakes = file_soup.find("div", class_="mistake-block")
        if idx_mistakes and file_mistakes:
            new_m_soup = BeautifulSoup(str(idx_mistakes), "html.parser")
            block = new_m_soup.find("div", class_="mistake-block")
            if block:
                block["id"] = "s-mistakes"
                header = block.find("div", class_="mistake-header")
                if header:
                    header["onclick"] = "COSY.toggleBlock('s-mistakes')"
            file_mistakes.replace_with(new_m_soup)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(str(file_soup))
        print(f"Updated {filepath}")

    update_standalone(kapoies_path, options[0], "B1", "Μεσαίο (B1)")
    update_standalone(gatos_path, options[1], "B1", "Μεσαίο (B1)")

if __name__ == "__main__":
    remediate_arletta()

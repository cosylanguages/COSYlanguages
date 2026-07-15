import re

with open("events/karaoke-club.html", "r", encoding="utf-8") as fh:
    content = fh.read()

# Let's define the new sessions to be inserted in the past sessions grid
new_history_entries = """
            <!-- 16. Maëlle Challenge (B1 French Special) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">Maëlle Challenge (Dedicated Page)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Notre défi musical spécial de 2 chansons : Toutes les machines ont le cœur et je t'aime comme je t'aime.<br><span style="font-size:0.82rem; display:block; margin-top:0.4rem;">Étudier séparément : <a href="sessions/toutes-les-machines-ont-le-coeur.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">Toutes les machines ont le cœur</a> • <a href="sessions/je-taime-comme-je-taime.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">je t'aime comme je t'aime</a></span></p>
              </div>
              <a href="sessions/maelle-challenge.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">Enter Challenge →</a>
            </div>

            <!-- 17. Toutes les machines ont le cœur (B1 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">Toutes les machines ont le cœur (Maëlle)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Analysez la résilience, la technologie et les sentiments à travers la voix douce et les paroles poignantes de Maëlle.</p>
              </div>
              <a href="sessions/toutes-les-machines-ont-le-coeur.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 18. je t'aime comme je t'aime (B1 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">je t'aime comme je t'aime (Maëlle)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Explorez la complicité, l'amour et la tendresse à travers ce chef-d'œuvre mélodique de Maëlle.</p>
              </div>
              <a href="sessions/je-taime-comme-je-taime.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 19. ABBA Challenge (B1 British Special) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">British English</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">ABBA Challenge (Dedicated Page)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Our special 2-song musical challenge: me & I and angeleyes.<br><span style="font-size:0.82rem; display:block; margin-top:0.4rem;">Study separately: <a href="sessions/me-and-i.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">me & I</a> • <a href="sessions/angeleyes.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">angeleyes</a></span></p>
              </div>
              <a href="sessions/abba-challenge.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">Enter Challenge →</a>
            </div>

            <!-- 20. me & I (B1 British English) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">British English</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">me & I (ABBA)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Explore the dual nature of personality and conflict in the playful, psychological rhythms of ABBA.</p>
              </div>
              <a href="sessions/me-and-i.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 21. angeleyes (B1 British English) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">British English</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">angeleyes (ABBA)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Analyze deceptive appearances, regrets, and warnings in one of ABBA's most catchy classic tracks.</p>
              </div>
              <a href="sessions/angeleyes.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 22. Salut (A2 French) -->
            <div class="history-session" data-levels="beginner" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#FAEEE8; color:#C0392B; border-color:#F5CBA7;">A2</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">Salut (Joe Dassin)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Learn the language of nostalgic reunions and memory lane in Joe Dassin's legendary ballad.</p>
              </div>
              <a href="sessions/salut.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 23. Toi Mon Amour (B1 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">Toi Mon Amour (Marc Lavoine & Clara Luciani)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Celebrate destinies, complicity and sweet romance in this modern, heartwarming French duet.</p>
              </div>
              <a href="sessions/toi-mon-amour.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 24. L'uomo che amava le donne (B1 Italian) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Italian</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">L'uomo che amava le donne (Nina Zilli)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Deconstruct Italian passion, charm and playful seduction in Nina Zilli's retro-soul masterpiece.</p>
              </div>
              <a href="sessions/luomo-che-amava-le-donne.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 25. Due Grosse Lacrime Bianche (B1 Italian) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Italian</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">Due Grosse Lacrime Bianche (Iva Zanicchi)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Dive into heartfelt Italian sorrow, regrets, and the poetic language of sad breakups.</p>
              </div>
              <a href="sessions/due-grosse-lacrime-bianche.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 26. Un'altra estate (B1 Italian) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Italian</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">Un'altra estate (Diodato)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Embrace summer breeze, sea horizons, and the absolute freedom of starting anew in Italian.</p>
              </div>
              <a href="sessions/unatta-estate.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 27. Mixed Up World (B1 British English) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">British English</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">Mixed Up World (Sophie Ellis-Bextor)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Navigate chaotic confusion and find your bright, energetic path of optimism with Sophie Ellis-Bextor.</p>
              </div>
              <a href="sessions/mixed-up-world.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 28. У мамы есть секрет (B1 Russian) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Russian</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">У мамы есть секрет (Монеточка)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Unveil motherly secrets, sweet care and childhood nostalgia in Monetochka's poetic, lighthearted pop hit.</p>
              </div>
              <a href="sessions/u-mamy-est-sekret.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 29. Massimo Ranieri Challenge (B1 Italian Special) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Italian</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">Massimo Ranieri Challenge (Dedicated Page)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Il nostro speciale sfida musicale di 2 canzoni : chi sara con te e l'amore e un attimo.<br><span style="font-size:0.82rem; display:block; margin-top:0.4rem;">Studiare separatamente : <a href="sessions/chi-sara-con-te.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">chi sara con te</a> • <a href="sessions/lamore-e-un-attimo.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">l'amore e un attimo</a></span></p>
              </div>
              <a href="sessions/massimo-ranieri-challenge.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">Enter Challenge →</a>
            </div>

            <!-- 30. chi sara con te (B1 Italian) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Italian</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">chi sara con te (Massimo Ranieri)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Discuss companionship, destinies and sacred promises in Italian with Massimo Ranieri.</p>
              </div>
              <a href="sessions/chi-sara-con-te.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 31. l'amore e un attimo (B1 Italian) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Italian</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">l'amore e un attimo (Massimo Ranieri)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Analyze love as a fleeting spark and a tender kiss in this high-energy classic track.</p>
              </div>
              <a href="sessions/lamore-e-un-attimo.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 32. Arletta Challenge (B1 Greek Special) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Greek</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">Arletta Challenge (Dedicated Page)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Η ειδική μουσική μας πρόκληση 2 τραγουδιών: κάποιες νύχτες και ο γάτος.<br><span style="font-size:0.82rem; display:block; margin-top:0.4rem;">Μελέτη ξεχωριστά: <a href="sessions/kapoies-nychtes.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">κάποιες νύχτες</a> • <a href="sessions/o-gatos.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">ο γάτος</a></span></p>
              </div>
              <a href="sessions/arletta-challenge.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">Enter Challenge →</a>
            </div>

            <!-- 33. κάποιες νύχτες (B1 Greek) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Greek</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">kapoies nychtes (Arletta)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Analyze late-night solitude, melancholy and moonlit dreams in Arletta's gentle acoustic ballad.</p>
              </div>
              <a href="sessions/kapoies-nychtes.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 34. ο γάτος (A2 Greek) -->
            <div class="history-session" data-levels="beginner" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#FAEEE8; color:#C0392B; border-color:#F5CBA7;">A2</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Greek</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">o gatos (Arletta)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Learn the language of freedom and neighborhood adventures through the eyes of a clever Greek cat.</p>
              </div>
              <a href="sessions/o-gatos.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 35. Esteman Challenge (B1 Spanish Special) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Spanish</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">Esteman Challenge (Dedicated Page)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Nuestro desafío musical especial de 2 canciones : amor libre y te alejas mas de mi.<br><span style="font-size:0.82rem; display:block; margin-top:0.4rem;">Estudiar por separado : <a href="sessions/amor-libre.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">amor libre</a> • <a href="sessions/te-alejas-mas-de-mi.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">te alejas mas de mi</a></span></p>
              </div>
              <a href="sessions/esteman-challenge.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">Enter Challenge →</a>
            </div>

            <!-- 36. amor libre (B1 Spanish) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Spanish</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">amor libre (Esteman)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Deconstruct freedom, pride, and social acceptance without prejudice in Esteman's lively indie-pop anthem.</p>
              </div>
              <a href="sessions/amor-libre.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 37. te alejas mas de mi (B1 Spanish) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Spanish</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">te alejas mas de mi (Esteman)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Analyze the language of physical distance, forgetting, and sad romantic absences in Spanish.</p>
              </div>
              <a href="sessions/te-alejas-mas-de-mi.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 38. Angèle Challenge (B1 French Special) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">Angèle Challenge (Dedicated Page)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Notre défi musical spécial de 2 chansons : oui ou non et balance ton quoi.<br><span style="font-size:0.82rem; display:block; margin-top:0.4rem;">Étudier par séparé : <a href="sessions/oui-ou-non.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">oui ou non</a> • <a href="sessions/balance-ton-quoi.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">balance ton quoi</a></span></p>
              </div>
              <a href="sessions/angele-challenge.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">Enter Challenge →</a>
            </div>

            <!-- 39. oui ou non (B1 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">oui ou non (Angèle)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Master French vocabulary of romantic uncertainty, messages, and late-night hesitation with Angèle.</p>
              </div>
              <a href="sessions/oui-ou-non.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 40. balance ton quoi (B1 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">balance ton quoi (Angèle)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Discuss respect, feminism, equality and fighting sexism in this witty, empowering French hit.</p>
              </div>
              <a href="sessions/balance-ton-quoi.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 41. nuevo verano (B1 Spanish) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Spanish</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">nuevo verano (Amaia)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Analyze nostalgia, youthful summers, and warm sunset beaches in Amaia's sweet indie-pop song.</p>
              </div>
              <a href="sessions/nuevo-verano.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 42. l'aziza (B2 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B2</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">l'aziza (Daniel Balavoine)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Discuss cultural diversity, tolerance, and human dignity in Daniel Balavoine's timeless anthem.</p>
              </div>
              <a href="sessions/laziza.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 43. nos ames sont (B2 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B2</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">nos âmes sont (Zazie)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Explore connection, spiritual depth, and the invisible ties that unite human souls in French with Zazie.</p>
              </div>
              <a href="sessions/nos-ames-sont.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 44. immobile (B1 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">immobile (Louane)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Deconstruct wait times, silences, and emotional immobility in Louane's sweet and touching ballad.</p>
              </div>
              <a href="sessions/immobile.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 45. la nuit n'en finit plus (B1 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">la nuit n'en finit plus (Petula Clark)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Dive into late-night insomnias, sadness and quiet hopes in Petula Clark's nostalgic sixties hit.</p>
              </div>
              <a href="sessions/la-nuit-nen-finit-plus.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 46. Angelina Wismes Challenge (B1 French Special) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">Angelina Wismes Challenge (Dedicated Page)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Notre défi musical spécial de 2 chansons : le soleil noir et la tour eiffel est pour moi.<br><span style="font-size:0.82rem; display:block; margin-top:0.4rem;">Étudier par séparé : <a href="sessions/le-soleil-noir.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">le soleil noir</a> • <a href="sessions/la-tour-eiffel-est-pour-moi.html" style="color:var(--teal); text-decoration:underline; font-weight:600;">la tour eiffel est pour moi</a></span></p>
              </div>
              <a href="sessions/angelina-wismes-challenge.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">Enter Challenge →</a>
            </div>

            <!-- 47. le soleil noir (B1 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">le soleil noir (Angelina Wismes)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Explore pensive melancholy, losses, and sad inner voids in this beautiful cover ballad.</p>
              </div>
              <a href="sessions/le-soleil-noir.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 48. la tour eiffel est pour moi (B1 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">la tour eiffel est pour moi (Angelina Wismes)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Learn the language of Parisian pride, freedom, and beauty beneath the clear skies of Paris.</p>
              </div>
              <a href="sessions/la-tour-eiffel-est-pour-moi.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 49. left outside alone (B2 American English) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B2</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">American English</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">left outside alone (Anastacia)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Discuss abandonment, cold solitude, and romantic betrayals in this powerful orchestral version.</p>
              </div>
              <a href="sessions/left-outside-alone.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 50. quelqu'un pour toi (B1 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">quelqu'un pour toi (Madame Monsieur)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Explore supportive encounters, destinies, and romantic hopes in Madame Monsieur's pop duet.</p>
              </div>
              <a href="sessions/quelquun-pour-toi.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 51. bien plus fort (B1 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">bien plus fort (Tereza Kesovija)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Master French vocabulary of intense passions, personal triumphs, and emotional courage with Tereza.</p>
              </div>
              <a href="sessions/bien-plus-fort.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 52. casualties of war (B2 American English) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B2</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">American English</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">casualties of war (Gossip)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Analyze conflict aftermaths, emotional scars, and powerful betrayals in Gossip's energetic rock track.</p>
              </div>
              <a href="sessions/casualties-of-war.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 53. un premier amour (B1 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">un premier amour (Isabelle Aubret)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Dive into pure romance, youth, and childhood memories with Isabelle Aubret's Eurovision classic.</p>
              </div>
              <a href="sessions/un-premier-amour.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 54. voila (B2 French) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B2</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">French</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">voila (Barbara Pravi)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Celebrate authenticity, vulnerability, and stage presence in Barbara Pravi's theatrical masterpiece.</p>
              </div>
              <a href="sessions/voila.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 55. выше домов (B1 Russian) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Russian</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">выше домов (Сироткин)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Unpack fly heights, starry skies and youth dreams in Sirotkin's atmospheric Russian alternative pop hit.</p>
              </div>
              <a href="sessions/vyshe-domov.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 56. as it was (A2 British English) -->
            <div class="history-session" data-levels="beginner" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#FAEEE8; color:#C0392B; border-color:#F5CBA7;">A2</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">British English</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">as it was (Harry Styles)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Explore sudden changes, isolations, and suburban routines in Harry Styles' global pop sensation.</p>
              </div>
              <a href="sessions/as-it-was.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 57. California dreaming (A2 American English) -->
            <div class="history-session" data-levels="beginner" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#FAEEE8; color:#C0392B; border-color:#F5CBA7;">A2</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">American English</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">California dreaming (The Mamas & Papas)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Master warm winter daydreams and classic 1960s American pop vocabulary.</p>
              </div>
              <a href="sessions/california-dreaming.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>

            <!-- 58. na i agapi na (B1 Greek) -->
            <div class="history-session" data-levels="intermediate" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:#FAF7F2;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                  <span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7;">B1</span>
                  <span class="club-tag" style="background:#FAF0E6; color:#8A4B08; border-color:#F5D6B3;">Greek</span>
                </div>
                <h4 style="margin:0 0 0.5rem;font-size:1.2rem;font-family: 'Playfair Display', serif; font-weight:700;">na i agapi na (Giannis Parios)</h4>
                <p style="margin:0; font-size:0.88rem; color:var(--muted); line-height:1.5;">Dive into warm hugs, romantic hope and sweet Greek kisses in Giannis Parios' famous ballad.</p>
              </div>
              <a href="sessions/na-i-agapi-na.html" class="view-btn" style="background:#4A154B; color:#FAF7F2; border-radius:12px; font-weight:600; padding:0.6rem 1.2rem; text-decoration:none;">View Session →</a>
            </div>
"""

# Let's insert new_history_entries right below <div class="history-body" style="display: block; padding: 0; border: none;">
target_pattern = r'<div class="history-body"[^>]*>'
match = re.search(target_pattern, content)
if match:
    idx = match.end()
    new_content = content[:idx] + new_history_entries + content[idx:]
    with open("events/karaoke-club.html", "w", encoding="utf-8") as fw:
        fw.write(new_content)
    print("Successfully updated events/karaoke-club.html with new session entries!")
else:
    print("Target tag not found in events/karaoke-club.html!")

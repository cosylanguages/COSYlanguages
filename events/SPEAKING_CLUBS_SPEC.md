# Speaking Clubs Specification & Templates

## 1. Core Principles
- **Immersion First:** All session content (topics, questions, notes) should be in the target language where possible.
- **The 5-Part Session Structure:** Every session (past or active) must follow this sequence:
  1. **Warm-up:** Anecdote, introduction, and initial low-pressure questions.
  2. **Round 1:** Core discussion questions.
  3. **Let's Speak Together:** Visual/interactive element (image sets, choices).
  4. **Round 2:** Advanced discussion, debates, or future-focused statements.
  5. **Discussion (Mistakes):** Review of linguistic mistakes made during the session.
- **Role-Based Reality:**
  - **Free Visitors:** See the club list and description. Prompted to unlock.
  - **Students:** See schedules, active session vocabulary, and full past session history.
  - **Teachers:** See everything students see + preparation topics + active mistake notes area.
- **Interactivity:** Toggles for Vocabulary, Rounds, and Mistake Notes.

## 2. Visual Guidelines
- **Typography:** Headers: `'Playfair Display'`, Body: `'DM Sans'`, Content: `'Nunito'`.
- **Club Colors:** Science (`#0F6E56`), Celebrate (`#BA7517`), Quotes (`#534AB7`), Mind (`#993556`), Life (`#3B6D11`), Debate (`#993C1D`).
- **Section Accents:** Warm-up (`#FAEEE8`), Round 1 (`#E1F5EE`), Speak Together (`#EEEDFE`), Round 2 (`#EAF3DE`), Mistakes (`#FFF8F5`).

## 3. HTML Template: Session Entry (History)
Place inside `.history-body` of a club card.

```html
<div class="history-session" id="[SESSION_ID]" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:10px;overflow:hidden;">
  <div class="history-session-header" onclick="toggleBlock('[SESSION_ID]')" style="display:flex;align-items:center;justify-content:space-between;padding:.5rem .85rem;cursor:pointer;font-size:.8rem;font-weight:500;background:#FAF7F2;user-select:none;">
    <span>[SESSION TOPIC] <span class="history-date" style="font-size:.72rem;color:var(--muted);font-weight:400;margin-left:.5rem;">[DATE]</span></span>
    <span class="round-toggle">▼</span>
  </div>
  <div class="history-session-body" style="display:none;padding:.65rem .85rem .85rem;border-top:1px solid var(--border);">
    <div class="rounds-container" style="display:flex;flex-direction:column;gap:.65rem;">

      <!-- 1. WARM-UP -->
      <div class="round-block warm-up" id="[SESSION_ID]-warm">
        <div class="round-header" style="background:#FAEEE8;" onclick="toggleRound('[SESSION_ID]-warm')">
          <span>🟠 Warm-up</span><span class="round-toggle">▼</span>
        </div>
        <div class="round-body">
          <p class="round-note">Anecdote & Intro</p>
          <p>[ANECDOTE TEXT]</p>
          <ul class="round-questions">
            <li>[QUESTION 1]</li>
          </ul>
        </div>
      </div>

      <!-- 2. ROUND 1 -->
      <div class="round-block" id="[SESSION_ID]-r1">
        <div class="round-header" style="background:#E1F5EE;" onclick="toggleRound('[SESSION_ID]-r1')">
          <span>🔵 Round 1 — Discussion</span><span class="round-toggle">▼</span>
        </div>
        <div class="round-body">
          <div class="round-item">
             <div class="round-item-main"><strong>1.</strong> [QUESTION]</div>
             <div class="round-item-personal">★ [PERSONAL ANGLE]</div>
          </div>
        </div>
      </div>

      <!-- 3. LET'S SPEAK TOGETHER -->
      <div class="round-block lst" id="[SESSION_ID]-lst">
        <div class="round-header" style="background:#EEEDFE;" onclick="toggleRound('[SESSION_ID]-lst')">
          <span>🟣 Let's Speak Together</span><span class="round-toggle">▼</span>
        </div>
        <div class="round-body">
          <p class="round-instruction">[INSTRUCTION]</p>
          <div class="lst-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(120px, 1fr)); gap:10px;">
             <!-- Image Item -->
             <div class="lst-item" style="text-align:center;">
                <img src="[URL]" style="width:100%; border-radius:8px; margin-bottom:5px;">
                <div style="font-size:.75rem; font-weight:600;">[LABEL]</div>
             </div>
          </div>
        </div>
      </div>

      <!-- 4. ROUND 2 -->
      <div class="round-block" id="[SESSION_ID]-r2">
        <div class="round-header" style="background:#EAF3DE;" onclick="toggleRound('[SESSION_ID]-r2')">
          <span>🟢 Round 2 — Deep Dive</span><span class="round-toggle">▼</span>
        </div>
        <div class="round-body">
          <div class="round-item">
             <div class="round-item-main"><strong>1.</strong> [STATEMENT/QUESTION]</div>
          </div>
        </div>
      </div>

      <!-- 5. DISCUSSION (MISTAKES) -->
      <div class="mistake-block" id="[SESSION_ID]-mistakes">
        <div class="mistake-header" onclick="toggleBlock('[SESSION_ID]-mistakes')">
          <span>✏️ Discussion (Mistakes)</span><span class="round-toggle">▼</span>
        </div>
        <div class="mistake-body">
          <div class="mistake-item">
            <span class="mistake-wrong">[WRONG]</span>
            <span class="mistake-arrow">→</span>
            <span class="mistake-right">[RIGHT]</span>
            <span class="mistake-note-text">([NOTE])</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
```

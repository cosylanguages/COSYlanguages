/*
  COSYlanguages — Supabase SRS Module (Student Area Edition)
  ==========================================================
  Integration for paid students in the My Lessons area.
*/

// ─────────────────────────────────────────────
// 1. CONFIG
// ─────────────────────────────────────────────
const SUPABASE_URL  = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON = 'YOUR_ANON_KEY';

let _cosy_sb;
if (typeof supabase !== 'undefined') {
  _cosy_sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
}

// ─────────────────────────────────────────────
// 2. AUTH — magic link login / logout
// ─────────────────────────────────────────────
window.CosyAuth = {
  async init() {
    if (!_cosy_sb) return;
    const { data: { session } } = await _cosy_sb.auth.getSession();
    if (session) {
      CosySupabaseDB.currentUser = session.user;
      await CosySupabaseDB.loadAll();
      CosyUI.showLoggedIn(session.user.email);
    } else {
      if (document.body.classList.contains('student-page') && localStorage.getItem('student_unlocked') === 'true') {
        CosyUI.showLoginForm();
      }
    }

    _cosy_sb.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        CosySupabaseDB.currentUser = session.user;
        await CosySupabaseDB.loadAll();
        CosyUI.showLoggedIn(session.user.email);
      }
      if (event === 'SIGNED_OUT') {
        CosySupabaseDB.currentUser = null;
        CosySupabaseDB.cache = { profile: null, srs: {}, days: {} };
        if (localStorage.getItem('student_unlocked') === 'true') {
            CosyUI.showLoginForm();
        }
      }
    });
  },

  async sendMagicLink(email) {
    const { error } = await _cosy_sb.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.href
      }
    });
    return error ? { ok: false, error: error.message } : { ok: true };
  },

  async signOut() {
    await _cosy_sb.auth.signOut();
    window.location.reload();
  },

  async triggerSendLink() {
    const email = document.getElementById('cosy-email-input')?.value?.trim();
    const msg   = document.getElementById('cosy-auth-msg');
    if (!email || !email.includes('@')) {
      if (msg) msg.textContent = 'Please enter a valid email address.';
      return;
    }
    if (msg) msg.textContent = 'Sending magic link…';
    const { ok, error } = await this.sendMagicLink(email);
    if (ok) {
      if (msg) msg.innerHTML =
        '✅ Check your inbox! Click the link to sign in, then come back here.';
    } else {
      if (msg) msg.textContent = '❌ ' + (error || 'Something went wrong.');
    }
  },

  get user() { return CosySupabaseDB.currentUser; }
};

// ─────────────────────────────────────────────
// 3. SM-2 ALGORITHM
// ─────────────────────────────────────────────
const CosySM2 = {
  update(item, quality) {
    if (quality >= 3) {
      if (item.repetitions === 0)      item.interval_days = 1;
      else if (item.repetitions === 1) item.interval_days = 6;
      else item.interval_days = Math.round(item.interval_days * item.ease_factor);
      item.repetitions++;
    } else {
      item.repetitions = 0;
      item.interval_days = 1;
    }
    item.ease_factor = Math.max(1.3,
      item.ease_factor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
    );
    const ms = item.interval_days * 24 * 60 * 60 * 1000;
    item.next_review = new Date(Date.now() + ms).toISOString();
    item.updated_at  = new Date().toISOString();
    return item;
  },

  quality(taskType, correct, usedHint = false) {
    if (!correct) return usedHint ? 1 : 0;
    if (usedHint) return 2;
    const hard = ['cloze', 'scramble', 'sentenceBuilder', 'type-cl', 'type-sc', 'type-ws', 'type-op'];
    const easy = ['multipleChoice', 'truefalse', 'listenSelect', 'type-mc', 'type-tf', 'type-ls'];
    if (hard.includes(taskType)) return 5;
    if (easy.includes(taskType)) return 3;
    return 4;
  },

  recommendTask(item, preferredTask) {
    if (!item || item.repetitions < 2) return 'type-mc';
    if (item.ease_factor < 1.8)        return 'type-tf';
    if (item.repetitions >= 5 && item.ease_factor >= 2.2) {
      const upgrades = {
        'type-mc': 'type-cl',
        'type-tf': 'type-sc',
        'type-ls': 'type-ws',
        'type-op': 'type-cl'
      };
      return upgrades[preferredTask] || 'type-cl';
    }
    return preferredTask || 'type-mc';
  }
};

// ─────────────────────────────────────────────
// 4. DATABASE LAYER
// ─────────────────────────────────────────────
window.CosySupabaseDB = {
  currentUser: null,
  cache: {
    profile:  null,
    srs:      {},
    days:     {}
  },

  async loadAll() {
    if (!this.currentUser) return;
    await Promise.all([
      this.loadProfile(),
      this.loadSRS(),
      this.loadDays()
    ]);
  },

  async loadProfile() {
    const { data } = await _cosy_sb
      .from('profiles')
      .select('*')
      .eq('id', this.currentUser.id)
      .single();
    this.cache.profile = data;
    return data;
  },

  async saveProfile(updates) {
    const { data } = await _cosy_sb
      .from('profiles')
      .upsert({ id: this.currentUser.id, ...updates })
      .select()
      .single();
    this.cache.profile = data;
    return data;
  },

  async loadSRS(language = null) {
    let q = _cosy_sb.from('srs_items').select('*').eq('user_id', this.currentUser.id);
    if (language) q = q.eq('language', language);
    const { data } = await q;
    (data || []).forEach(row => {
      this.cache.srs[row.language + '::' + row.item_id] = row;
    });
    return this.cache.srs;
  },

  getItem(language, itemId) {
    return this.cache.srs[language + '::' + itemId] || null;
  },

  async recordAnswer(language, itemId, itemType, theme, subTheme,
                     taskType, correct, usedHint = false) {
    const key = language + '::' + itemId;
    const existing = this.cache.srs[key] || {
      user_id:         this.currentUser.id,
      language,
      item_id:         itemId,
      item_type:       itemType,
      theme,
      sub_theme:       subTheme,
      repetitions:     0,
      ease_factor:     2.5,
      interval_days:   1,
      next_review:     new Date().toISOString(),
      correct_count:   0,
      incorrect_count: 0
    };

    if (correct) existing.correct_count++;
    else         existing.incorrect_count++;
    existing.last_task_type = taskType;
    existing.last_seen = new Date().toISOString();

    const q = CosySM2.quality(taskType, correct, usedHint);
    CosySM2.update(existing, q);

    const { data } = await _cosy_sb
      .from('srs_items')
      .upsert(existing, { onConflict: 'user_id,language,item_id' })
      .select()
      .single();

    this.cache.srs[key] = data || existing;
    return data || existing;
  },

  dueItems(language) {
    const now = new Date().toISOString();
    return Object.values(this.cache.srs)
      .filter(i => i.language === language && i.next_review <= now)
      .sort((a, b) => a.next_review.localeCompare(b.next_review));
  },

  dueCount(language) {
    return this.dueItems(language).length;
  },

  sortByUrgency(language, itemIds) {
    const now = Date.now();
    return itemIds.slice().sort((a, b) => {
      const ia = this.cache.srs[language + '::' + a];
      const ib = this.cache.srs[language + '::' + b];
      const scoreFor = (item) => {
        if (!item) return 0;
        const overdue = Math.max(0,
          now - new Date(item.next_review).getTime()) / 86400000;
        const difficulty = (5 - item.ease_factor);
        return overdue * 2 + difficulty;
      };
      return scoreFor(ib) - scoreFor(ia);
    });
  },

  async startSession(language, sessionType = 'lesson') {
    const { data } = await _cosy_sb
      .from('sessions')
      .insert({
        user_id:      this.currentUser.id,
        language,
        session_type: sessionType,
        started_at:   new Date().toISOString()
      })
      .select()
      .single();
    this._activeSession = data;
    return data;
  },

  async endSession(pointsEarned, itemsSeen, itemsCorrect) {
    if (!this._activeSession) return;
    await _cosy_sb
      .from('sessions')
      .update({
        ended_at:      new Date().toISOString(),
        points_earned: pointsEarned,
        items_seen:    itemsSeen,
        items_correct: itemsCorrect
      })
      .eq('id', this._activeSession.id);
    this._activeSession = null;
  },

  async addPoints(points) {
    const profile = this.cache.profile;
    if (!profile) return;
    const newTotal = (profile.cosy_points || 0) + points;
    await this.saveProfile({ cosy_points: newTotal });

    const today = new Date().toISOString().slice(0, 10);
    await _cosy_sb.from('practice_days').upsert(
      { user_id: this.currentUser.id, day: today,
        points: (this.cache.days[today] || 0) + points },
      { onConflict: 'user_id,day' }
    );
    this.cache.days[today] = (this.cache.days[today] || 0) + points;

    await this.recalcStreak();
    return newTotal;
  },

  async recalcStreak() {
    const { data } = await _cosy_sb
      .from('practice_days')
      .select('day')
      .eq('user_id', this.currentUser.id)
      .order('day', { ascending: false })
      .limit(365);

    if (!data || data.length === 0) return 0;
    const days  = data.map(r => r.day).sort().reverse();
    const today = new Date().toISOString().slice(0, 10);
    let streak  = 0;
    let cursor  = today;
    for (const d of days) {
      if (d === cursor) {
        streak++;
        const dt = new Date(cursor);
        dt.setDate(dt.getDate() - 1);
        cursor = dt.toISOString().slice(0, 10);
      } else break;
    }
    await this.saveProfile({ streak });
    return streak;
  },

  accuracyByTheme(language) {
    const items = Object.values(this.cache.srs)
      .filter(i => i.language === language && i.theme);
    const map = {};
    items.forEach(i => {
      if (!map[i.theme]) map[i.theme] = { correct: 0, total: 0 };
      map[i.theme].correct += i.correct_count;
      map[i.theme].total   += i.correct_count + i.incorrect_count;
    });
    return Object.entries(map)
      .map(([theme, s]) => ({
        theme,
        accuracy: s.total ? Math.round(s.correct / s.total * 100) : null,
        total:    s.total
      }))
      .filter(x => x.total >= 3)
      .sort((a, b) => a.accuracy - b.accuracy);
  },

  async loadDays() {
    const { data } = await _cosy_sb
      .from('practice_days')
      .select('day, points')
      .eq('user_id', this.currentUser.id)
      .order('day', { ascending: false })
      .limit(90);
    (data || []).forEach(r => { this.cache.days[r.day] = r.points; });
    return this.cache.days;
  }
};

// ─────────────────────────────────────────────
// 5. UI HELPERS
// ─────────────────────────────────────────────
window.CosyUI = {
  showLoginForm() {
    const existing = document.getElementById('cosy-auth-panel');
    if (existing) return;

    const panel = document.createElement('div');
    panel.id = 'cosy-auth-panel';
    panel.className = 'setup-card';
    panel.style.cssText = `
      background:var(--sage-mist);
      border:2px solid var(--sage);
      margin-top:2rem;
    `;
    panel.innerHTML = `
      <div style="font-size:1.4rem;margin-bottom:.5rem;">🔐</div>
      <h3 style="font-family:'Lora',serif;font-size:1.2rem;font-weight:700;
                 color:var(--sage-deep);margin-bottom:.4rem;">Sync Your Progress</h3>
      <p style="font-size:.88rem;color:var(--muted);margin-bottom:1.2rem;line-height:1.6;">
        Enter your email — we'll send you a magic link. No password needed.<br>
        Your points, streak and SRS progress will sync across all your devices.
      </p>
      <div style="display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap;">
        <input id="cosy-email-input" type="email" placeholder="your@email.com"
          class="pill-input" style="max-width:220px;" />
        <button onclick="window.CosyAuth.triggerSendLink()"
          class="cta-button primary">
          Send magic link ✨
        </button>
      </div>
      <p id="cosy-auth-msg" style="font-size:.8rem;color:var(--sage-dark);margin-top:.7rem;"></p>
    `;

    const target = document.getElementById('curriculum-content');
    if (target) target.appendChild(panel);
  },

  showLoggedIn(email) {
    const panel = document.getElementById('cosy-auth-panel');
    if (panel) panel.remove();

    const badge = document.getElementById('cosy-account-badge');
    if (!badge) {
      const b = document.createElement('div');
      b.id = 'cosy-account-badge';
      b.style.cssText = `
        display:inline-flex;align-items:center;gap:.5rem;
        background:var(--sage-pale);border:1px solid var(--sage);border-radius:999px;
        padding:.25rem .8rem;font-size:.76rem;font-weight:700;
        color:var(--sage-deep);margin-bottom:1rem;
      `;
      b.innerHTML = `
        ☁️ Syncing as <strong>${email}</strong>
        <button onclick="window.CosyAuth.signOut()"
          style="background:none;border:none;color:var(--sage);font-size:.72rem;
                 cursor:pointer;margin-left:.2rem;font-family:'Nunito',sans-serif;text-decoration:underline;">
          (sign out)
        </button>
      `;
      const target = document.querySelector('.student-header-inner');
      if (target) target.appendChild(b);
    }

    this.renderWeakAreas();
  },

  renderDueCount(language) {
    const count = CosySupabaseDB.dueCount(language);
    let btn = document.getElementById('cosy-due-btn');
    if (count === 0) {
      if (btn) btn.remove();
      return;
    }
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'cosy-due-btn';
      btn.onclick = () => CosySRS.startReviewSession(language);
      btn.className = 'cta-button';
      btn.style.cssText = `
        background:var(--honey);color:#fff;border:none;border-radius:999px;
        padding:.8rem 1.5rem;font-family:'Nunito',sans-serif;font-weight:900;
        font-size:.85rem;cursor:pointer;margin-bottom:1rem;width:100%;
        box-shadow:0 4px 12px rgba(232,168,56,.3);
      `;

      const target = document.getElementById('lesson-selector');
      if (target) target.insertBefore(btn, target.firstChild);
    }
    btn.textContent = `📬 Review due items (${count})`;
  },

  renderWeakAreas() {
    const lang = localStorage.getItem('language') || 'en';
    const weak = CosySupabaseDB.accuracyByTheme(lang).slice(0, 3);
    if (weak.length === 0) return;

    let panel = document.getElementById('cosy-weak-panel');
    if (!panel) {
      panel = document.createElement('div');
      panel.id = 'cosy-weak-panel';
      panel.style.cssText = `
        background:rgba(107,143,113,0.05);border:1px solid var(--border);border-radius:12px;
        padding:1rem 1.2rem;margin:1.5rem 0;font-family:'Nunito',sans-serif;text-align:left;
      `;
      const target = document.getElementById('curriculum-content');
      if (target) target.appendChild(panel);
    }

    panel.innerHTML = `
      <div style="font-size:.68rem;font-weight:900;letter-spacing:.06em;
                  text-transform:uppercase;color:var(--sage-dark);margin-bottom:.5rem;">
        📉 Your Weak Areas (Need Practice)
      </div>
      ${weak.map(w => `
        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.3rem;font-size:.8rem;">
          <span style="flex:1;color:var(--sage-deep);font-weight:700;">${w.theme.replace(/_/g, ' ')}</span>
          <div style="width:80px;height:6px;background:var(--sage-pale);border-radius:999px;overflow:hidden;
                      border:1px solid var(--border);">
            <div style="width:${w.accuracy}%;height:100%;background:var(--sage);border-radius:999px;"></div>
          </div>
          <span style="color:var(--sage-dark);font-weight:800;font-size:.76rem;min-width:32px;">${w.accuracy}%</span>
        </div>
      `).join('')}
      <div style="font-size:.72rem;color:var(--muted);margin-top:.4rem;">
        We'll prioritize these in your review sessions.
      </div>
    `;
  }
};

// ─────────────────────────────────────────────
// 6. INTEGRATION INTERFACE
// ─────────────────────────────────────────────
window.CosySRS = {
  async onAnswer(data) {
    if (CosySupabaseDB.currentUser) {
      await CosySupabaseDB.recordAnswer(
        data.language, data.itemId, data.itemType, data.theme, data.subTheme,
        data.taskType, data.correct, data.usedHint
      );
      if (data.pointsEarned > 0) {
        await CosySupabaseDB.addPoints(data.pointsEarned);
      }
    }
  },

  getTaskType(language, itemId, preferredTask) {
    if (!CosySupabaseDB.currentUser) return preferredTask;
    const item = CosySupabaseDB.getItem(language, itemId);
    return CosySM2.recommendTask(item, preferredTask);
  },

  sortItems(language, itemIds) {
    if (CosySupabaseDB.currentUser) {
      return CosySupabaseDB.sortByUrgency(language, itemIds);
    }
    return itemIds;
  },

  async onSessionStart(language, sessionType = 'lesson') {
    if (CosySupabaseDB.currentUser) {
      await CosySupabaseDB.startSession(language, sessionType);
    }
  },

  async onSessionEnd(pointsEarned, itemsSeen, itemsCorrect) {
    if (CosySupabaseDB.currentUser) {
      await CosySupabaseDB.endSession(pointsEarned, itemsSeen, itemsCorrect);
    }
  },

  getDueItems(language) {
    if (!CosySupabaseDB.currentUser) return [];
    return CosySupabaseDB.dueItems(language);
  },

  startReviewSession(language) {
    const due = CosySupabaseDB.dueItems(language);
    if (due.length === 0) return;
    window.location.href = `lesson.html?lang=${language}&lesson=1&session=review`;
  }
};

// ─────────────────────────────────────────────
// 7. BOOT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    CosyAuth.init();

    if (document.body.classList.contains('student-page') && !window.location.pathname.includes('lesson.html')) {
        setInterval(() => {
            const lang = localStorage.getItem('language') || 'en';
            if (CosySupabaseDB.currentUser) CosyUI.renderDueCount(lang);
        }, 30000);
    }
});

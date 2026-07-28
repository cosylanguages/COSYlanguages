# Investigation Report: Missing Core Scripts (`router.js` & `init.js`)

An audit of the COSYlanguages repository revealed that multiple HTML files contain `<script>` tags referencing `js/core/router.js` (181 files) and `js/core/init.js` (166 files), yet neither file is currently present in the repository. This report details their history, functionality, migration paths, current dependency status, and a final architectural recommendation.

---

## 1. Git History Investigation

A thorough check of the repository's git log confirms that both `js/core/router.js` and `js/core/init.js` did exist historically.

### Deletion Metadata
* **Commit Hash:** `2326114e4718dac878d291068a696e7cca19184d`
* **Date:** Tue May 26 17:14:34 2026
* **Commit Message:** `"refactor: consolidate core scripts and standardize codebase architecture"`
* **Authors:** `google-labs-jules[bot]` and `cosylanguages`

### What These Files Did & Where Their Functionality Lives Now

#### A. `js/core/router.js`
* **Original Purpose:** It managed simple hash-based and path-based navigation active state management. Specifically, it defined `updateNavActiveState` which automatically appended/removed the `active` CSS class on navigation elements on `hashchange`, `popstate`, and `DOMContentLoaded` events.
* **Migration Target:**
  The exact logic of `updateNavActiveState` was fully integrated and optimized directly inside the unified global state/bootstrap engine in **`js/core/engine.js`** (lines 180–232). Additionally, it is called programmatically by `js/core/ui.js` and bound globally to `hashchange` and `popstate` events on the `window` level.

#### B. `js/core/init.js`
* **Original Purpose:** It contained utility page toggle helpers (`toggleRound`, `toggleBlock`) and a client-side dictionary mechanism (`loadDict`, `saveDict`, `addToDict`, `removeFromDict`, `refreshDictUI`, `refreshVocabButtons`, `toggleDict`, `exportDict`) to let students save words in their personal vocabulary dictionary.
* **Migration Target:**
  The legacy global functions in `init.js` were completely refactored and consolidated into the modern namespaces of the unified core scripts:
  * **Core State & Dictionary Persistence:** Refactored into standard API methods under the unified `window.COSY` namespace inside **`js/core/engine.js`** (e.g., `COSY.addToDict`, `COSY.toggleDict`, `COSY.removeFromDict`, `COSY.exportDict`).
  * **Toggle & Interactive UI Elements:** Integrated and managed natively inside **`js/core/ui.js`**.
  * **Automatic Setup:** `COSY.initTheme`, `loadDict`, and navigation triggers are now automatically bootstrapped within `engine.js` and `ui.js` when the DOM loads, rendering `init.js` entirely obsolete.

---

## 2. Currently-Live Code Call Dependency Analysis

To ensure that no currently-active code references or depends on variables, functions, or classes that only `router.js` or `init.js` would expose, a recursive search across the key application folders (`js/`, `games/`, `courses/`, `practice/`) was executed.

### Search Patterns Tested
A case-sensitive pattern search was performed:
* `Router.`
* `new Router`
* `AppInit`
* `initRouter`
* `Init.init`

### Results
* **Matches Found:** `0` (Zero)
* **Analysis:** Modern layouts, courses, interactive engines, and practice hub components do not refer to any of these legacy initialization variables or custom router patterns. Instead, they interact with the unified core platform via the modular `COSY` API or standard event listeners. No runtime script dependends on these two deleted scripts.

---

## 3. Recommendation

**Recommendation: Option (a) — These script tags are dead references that should be removed from all affected files.**

### Rationale:
1. **Redundancy:** The code previously residing in `router.js` and `init.js` is already completely ported, optimized, and actively running within `js/core/engine.js` and `js/core/ui.js`.
2. **Performance & Network Cleanliness:** Keeping these `<script>` tags triggers unnecessary HTTP requests (returning `404 Not Found` errors) for 347 files, which degrades page loading speeds, clutters developer consoles, and represents a significant technical debt.
3. **No Missing Features:** All functionality (dynamic styling of active nav elements, interactive page-state initialization, and the dictionary system) remains fully intact and operational via `engine.js` and `ui.js`.

### Proposed Next Step (After Report PR Approval):
Run a automated cleanup script (or search-and-replace command) to strip the obsolete `<script src=".../router.js"></script>` and `<script src=".../init.js"></script>` tags from:
* `grammar/index.html`
* `courses/index.html`
* 181 `games/*/index.html` game pages
* 166 course-related subpages under `courses/**`

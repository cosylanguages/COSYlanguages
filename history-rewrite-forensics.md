# History Rewrite Forensic Investigation Report

## 1. Executive Summary

A forensic git investigation was conducted on repository `cosylanguages/COSYlanguages` to determine why all open PR branches fail to merge or rebase against `main` with:
`fatal: refusing to merge unrelated histories`.

The investigation confirms that **`main`'s git history was completely re-initialized (or force-pushed from a fresh root commit) on September 10, 2026**. As a result, current `main` and older open PR branches share **zero common git ancestors**.

---

## 2. Root Commit Analysis & Timeline

### Current `main` Root Commit
- **Root Commit Hash:** `b4615fdba5b143447143dc15f5d5568a0b6f9f23`
- **Commit Date:** September 10, 2026 at 22:42:43 +0200
- **Author/Committer:** `cosylanguages <cosylanguages@gmail.com>`
- **Subject Line:** `Feat/public cross repo navigation 15702105974120438669 (#1402)`
- **Parent Count:** 0 (This commit has zero parents and serves as the sole root commit of current `main`).

### Divergence Analysis for PR Branches (#812, #761, #754)

Three representative open PR branches were analyzed against current `main`:

| PR # | Target Branch | PR Root Commit Hash | Commit Date | Merge-Base with `main` | Common Ancestor? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#812** | `origin/fix/practice-hub-fallbacks-10095073093775825357` | `052a8ce80e1d5b24e89d538e2e5c7c0c5d9b0ce0` | 2026-08-01T19:16:05Z | *(empty)* | **No (0 shared commits)** |
| **#761** | `origin/fix/karaoke-generator-13688498640091297809` | `d27c6da5df6926639af3c4ff14961f6fcd4ecd8c` | 2026-07-30T11:54:10Z | *(empty)* | **No (0 shared commits)** |
| **#754** | `origin/fix/wonder-sessions-reorder-8865945569072926775` | `64fdf976595017fc6de5c07da1922528bda6f937` | 2026-07-30T08:37:25Z | *(empty)* | **No (0 shared commits)** |

- Executing `git merge-base main origin/fix/...` returns an empty string for all three branches.
- Each PR branch roots at a completely different commit chain created between July and August 2026, prior to the September 10, 2026 history re-initialization of `main`.

---

## 3. Search for Pre-Rewrite Backup References

A comprehensive check of git reflog, tags, and remote tracking branches was performed:

1. **`git show-ref` Inspection:**
   - Scanned for `refs/original/*` (leftover artifacts from `git filter-branch`). Result: **None found**.
   - Scanned for backup tags or branches (e.g. `pre-restructure`, `legacy-main`, `archive/main`). Result: **None found**.
2. **`git reflog` Inspection:**
   - Evaluated `git reflog show --all`. The reflog begins cleanly at `b4615fdb` upon repository cloning. No local or remote pre-rewrite commits exist in the reflog.
3. **Remote Branch Analysis:**
   - Remotes contain active feature branches, but all pre-rewrite branches are orphaned relative to current `main`.

**Conclusion:** No pre-rewrite backup ref or legacy main tracking branch exists in the repository that could serve as a common rebase root.

---

## 4. Root Cause Determination

Around **September 10, 2026**, a major architectural restructuring took place across the COSY languages ecosystem (`COSYlanguages`, `COSYtools`, `COSYgames`, `COSYevents`, `COSYworld`). During this restructuring, `main` was re-initialized with commit `b4615fdba5b143447143dc15f5d5568a0b6f9f23` (`Feat/public cross repo navigation 15702105974120438669 (#1402)`).

Because `main` was force-pushed with a new root commit, standard git merge (`git merge`) and rebase (`git rebase`) operations between `main` and any PR branch created prior to Sep 10, 2026 fail automatically with `unrelated histories`.

---

## 5. Recommendation for PR Resolution

Because `main` and all pre-rewrite PR branches share no git graph history and no pre-rewrite backup ref exists:

1. **Do NOT attempt standard `git merge` or `git rebase`:**
   - Standard merge operations will fail with unrelated history errors, or force-merging (`--allow-unrelated-histories`) will cause widespread file duplication, overwritten directories, or invalid diffs due to the structural relocation of tools/games/events.
2. **Mandatory Resolution Method: Cherry-Pick-by-File / Targeted Patch Extraction:**
   - Every valid open PR should be integrated by inspecting the specific changed files on the PR branch (e.g. `git diff b4615fdb <PR-branch> -- <filepath>`), extracting the relevant content/patch, and applying it directly onto current `main`.
   - Cherry-picking by file operates purely on content diffs and bypasses git commit tree ancestry entirely, ensuring clean integration without corrupting repository history.

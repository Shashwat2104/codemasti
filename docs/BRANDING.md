# CodeMasti: Brand Research, Decision and Rebrand Report

Final name: **CodeMasti**, chosen and confirmed by the project owner on 2026-11-16.
Legend: **[V]** verified by a live check on 2026-11-16 · **[S]** third-party web search · **[U]** unverified, needs an external check · **[J]** judgment.

## 1. Product analysis [V]

CodeMasti is a browser-based, prompt-to-app workspace. The user picks an LLM per prompt, the AI writes and edits a full-stack project, and a WebContainers runtime installs, runs and previews it in the browser.

- **Features:** 22 registered LLM providers (cloud and local); editor, terminal, diff viewer and live preview; framework starters; Git clone/push; ZIP export; deploy to Netlify, Vercel and GitHub Pages; Supabase; MCP tools; Electron desktop build.
- **Stack:** React Router + Vite, TypeScript, UnoCSS, Vercel AI SDK, Cloudflare Workers runtime, Electron.
- **Audience:** developers who want an open-source, bring-your-own-key, self-hostable AI app builder.
- **Differentiators:** model-agnostic, self-hostable, no vendor credits, full code ownership.
- **Limits:** the upstream project states that no new features are planned. The in-browser runtime uses StackBlitz WebContainers, which is free for non-commercial and open-source use and needs a paid licence for commercial use.
- **Upstream:** derived from [bolt.diy](https://github.com/stackblitz-labs/bolt.diy), MIT licensed.

## 2. Competitors [S]

Sources: [uibakery](https://uibakery.io/blog/v0-vs-bolt-vs-replit), [DEV Community](https://dev.to/jangwook_kim_e31e7291ad98/vibe-coding-tools-compared-2026-boltnew-vs-lovable-vs-replit-vs-v0-which-ai-app-builder-wins-3k0j), [mindstudio](https://www.mindstudio.ai/blog/best-ai-app-builders), [banani](https://www.banani.co/blog/bolt-ai-alternatives). Most are vendor or affiliate blogs, so treat them as indicative.

| Product | Positioning | Name style |
|---|---|---|
| v0 | UI specialist, React/Next.js | Short code-like |
| Bolt.new | Fast browser full-stack prototypes | Common English word |
| Lovable | Ship real apps with auth/DB/payments | Emotive English word |
| Replit | IDE + agent | Verb-like coinage |
| Dyad, ForgeAI, Open Lovable | Open-source BYOK builders | Short or compound |

CodeMasti takes an Indian, playful voice that none of them use, and it does not imitate any of their names.

## 3. Keywords [S]/[U]

Only one volume datapoint was found, from a single third-party tool: "ai app builder" about 4,400/month, "ai app generator" about 1,600, "ai powered app builder" about 590. No keyword-difficulty data was found. Everything else is unverified, and none of it is validated demand. Keywords sit in the SEO title, description and structured data, not in the brand name.

## 4. Candidates and scoring

About 90 names were generated and checked across serious Sanskrit-rooted, funny Hindi and funny regional (Tamil, Telugu, Malayalam, Punjabi) batches. Availability checks were live lookups: .com (Verisign RDAP), .in (rdap.org), .app (Google registry RDAP), GitHub user/org, and npm. Rate-limited .in lookups were treated as unverified.

- Every real Sanskrit or Hindi word tested had a taken .com.
- Serious shortlist: Shilpyo, Takshar, Sthapo, Kalpyr, Srijyo, Yuktio, Aakarya.
- The owner's earlier pick, Shilpkar, was set aside after it turned out to be a crowded name in India, with many registered companies using it and its .com, .in and GitHub names taken.
- The owner then selected **CodeMasti**.

## 5. Selected name: CodeMasti

- **Meaning:** "Masti" is Hindi/Urdu for fun and playfulness, so "coding for fun". It is Hindi-rooted.
- **Tagline:** "Build apps with AI. Any model. Your keys."
- **SEO title:** CodeMasti: Open-Source AI App Builder, Any Model, Your Keys
- **SEO description:** CodeMasti turns your prompt into a running full-stack app in the browser. Use any LLM, keep your own API keys, edit code live, and deploy to Netlify or Vercel.

| Check | Result |
|---|---|
| codemasti.com | **Registered** (parked or in use, unknown) [V] |
| codemasti.in | No record [V] |
| codemasti.app | No record [V] |
| GitHub user/org `CodeMasti` | **Taken** by an existing user [V] |
| npm `codemasti` | No record [V] |
| Web search for the name | Nothing found [S] |
| Trademark (WIPO, IP India) | **Not verified** [U] |
| X, LinkedIn, Instagram, YouTube handles | **Not verified** [U] |

Use `codemasti.in` or `codemasti.app` as the main domain. The repo is `Shashwat2104/codemasti`.

## 6. Brand identity

- **Logo:** a rounded square with a saffron-to-pink gradient (#FB923C to #DB2777). Inside it are white code brackets `<>` that form a smiling face, which is the "masti".
- **Wordmark:** "Code" in medium weight plus "Masti" in heavy weight in orange (#F97316). Light and dark variants are in `public/logo-light.svg` and `public/logo-dark.svg`.
- **Typography:** Inter, as the app already uses.
- **Palette:** accent scale changed to the Tailwind orange scale in `uno.config.ts`; theme-color `#F97316`; deep-plum background `#1F1B2E` for the social card.
- **Assets:** `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` (and the precomposed copy), `social-card.png` (1200x630), `site.webmanifest`.
- **Limit:** the dark Dracula theme and some components keep their original purple via separate theme variables. Only the shared accent palette was changed.

## 7. What changed

- **Name:** product name now CodeMasti in the UI (header, onboarding, chat placeholder, terminal tab, alerts, bug-report panel, documentation panel), page titles, system-prompt identity lines, `package.json` (name `codemasti`), Electron `productName`/`appId`, Docker image, CI and issue templates, README, docs and scripts. Repo links point to `Shashwat2104/codemasti`.
- **Updater:** `electron-update.yml` and `electron-builder.yml` now publish to `Shashwat2104/codemasti` instead of the upstream owner.
- **License:** `LICENSE` filled with the upstream MIT text and copyright (StackBlitz, Inc. and bolt.diy contributors), plus a CodeMasti modification line.
- **CODEOWNERS:** `@Shashwat2104`.
- **.gitignore:** removed the `*.md` rule that silently kept README, FAQ and CONTRIBUTING out of the repo.
- **SEO:** page title, meta description, Open Graph and Twitter tags, JSON-LD `SoftwareApplication`, `theme-color`, web manifest, `/robots.txt` and `/sitemap.xml` (built from the request origin), and optional `VITE_SITE_URL` for canonical and absolute social-image URLs.
- **Not changed:** APIs, business logic, auth, data, integrations. Technical identifiers such as `bolt_*` storage keys, `bolt-elements-*` CSS variables and `boltArtifact` tags were left alone for compatibility.

## 8. Old-brand audit (remaining occurrences, all intentional)

- `LICENSE`, `README.md` (acknowledgements and upstream docs link): required upstream attribution.
- `changelog.md`, `CHANGES.md`: upstream history.
- `.github/ISSUE_TEMPLATE/config.yml`: link for Bolt.new-only issues, marked "not CodeMasti".
- `app/lib/common/prompts/discuss-prompt.ts` lines 67-80: model prompt that points users at `support.bolt.new` help articles. Left alone because changing it would change model behaviour. **Review recommended.**
- `PROJECT.md` line 8 and `vite.config.ts` line 279: links to upstream project board and an upstream issue.
- `app/lib/hooks/StickToBottom.tsx`, `useStickToBottom.tsx`: third-party copyright headers.

## 9. Verification

| Check | Result |
|---|---|
| Typecheck (`tsc`) | Pass |
| Lint (`eslint app`) | Pass |
| Production build (`pnpm run build`) | Pass |
| Unit tests (`pnpm test`) | 699 pass, **10 fail in 5 files** (see below) |
| Live dev server | `/`, `/api/models`, `/robots.txt`, `/sitemap.xml`, manifest, icons, social card all return 200 |
| Page title, meta, OG, Twitter, JSON-LD | Present in rendered HTML |
| Browser console | 0 errors, 1 warning |
| Desktop (1280px) and mobile (390px) | Header logo, placeholder and layout render correctly |

The 10 failing tests are timing-budget tests in `tests/performance/*` (8), one parser benchmark in `message-parser.spec.ts`, and `workbench-lifecycle.spec.ts` (`filesStore.getFile is not a function`). This branch changes none of those files or the code they test, so they look pre-existing, but I did not run them on the original code to confirm.

## 10. Remaining risks and unverified items

1. **Trademark:** CodeMasti is not cleared in WIPO or IP India. Run a search and consider a filing before heavy branding.
2. **`codemasti.com` is registered** and the **GitHub name `CodeMasti` is taken**, so brand consistency across channels is weaker.
3. **Social handles** (X, LinkedIn, Instagram, YouTube) are unchecked.
4. **`og:image` is relative** unless `VITE_SITE_URL` is set, and social crawlers need an absolute URL. No canonical tag is emitted without it.
5. **No domain is bound yet**, so no real deployment or search indexing exists. No ranking improvement is claimed.
6. **Dark theme** still uses the old purple in places.
7. **`discuss-prompt.ts`** still points users to Bolt.new support pages.
8. **WebContainers licence:** commercial use needs StackBlitz's paid licence.
9. **Hindi roots:** the name is Hindi-derived, while the owner asked earlier for non-Hindi Indian words. The owner chose it knowingly.

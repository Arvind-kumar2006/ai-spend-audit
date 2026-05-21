# PRICING_DATA.md

> All prices verified from official vendor pricing pages on **2026-05-21**.
> Screenshots taken directly from vendor sites on this date.
> All prices in **USD** unless otherwise noted.

---

## Cursor

| Plan | Price | Billing | Notes |
|------|-------|---------|-------|
| Hobby | Free | — | Limited Agent requests + Tab completions, no credit card required |
| Pro | $20/month | Monthly | $20 monthly credit pool, frontier models, cloud agents, MCPs |
| Pro | $16/month | Yearly | Same as monthly Pro |
| Pro+ | $60/month | Monthly | 3x credits vs Pro ($60 pool), heavier usage |
| Ultra | $200/month | Monthly | $400 credit pool, maximum usage |
| Teams | $40/user/month | Monthly | Pro-equivalent per seat + admin controls, centralized billing, shared rules |
| Teams | $32/user/month | Yearly | — |
| Enterprise | **Custom — contact sales** | Negotiated | See notes below |

**Source:** https://cursor.com/pricing — verified 2026-05-21

**Notes:**
- **Enterprise:** No public pricing. Adds pooled usage across org, invoice/PO billing, SCIM seat management, AI code tracking API, audit logs, granular admin + model controls, priority support + dedicated account manager. Contact sales at cursor.com for quote. Teams of 20+ users typically receive volume discounts; multi-year contracts can reduce effective per-seat cost by 15–30% (per Vendr transaction data).
- **Credit system (since June 2025):** Each paid plan includes a monthly credit pool equal to the plan price. Auto mode is unlimited and does NOT draw from credits. Only manually selecting frontier models or Max mode depletes credits.
- **Bugbot add-on:** $40/user/month for Pro and Teams users (custom for Enterprise). Automated PR code review tool — separate from editor pricing.
- Teams pricing ($40/user/month) is a starting point; negotiate for 100+ seats.

---

## GitHub Copilot

### Individual Plans

| Plan | Price | Notes |
|------|-------|-------|
| Free | $0 | 50 agent/chat requests/month, 2,000 completions/month |
| Pro | $10/user/month | 300 premium requests/month, Copilot cloud agent, code review |
| Pro+ | $39/user/month | 5x premium requests vs Pro, access to all models incl. Claude Opus 4.7 |

### Business Plans

| Plan | Price | Notes |
|------|-------|-------|
| Business | $19/user/month | 300 premium requests/user, unlimited agent mode + chats w/ GPT-5 mini |
| Enterprise | $39/user/month | 3.33x premium requests vs Business, GitHub Spark access |

**Source:** https://github.com/features/copilot — verified 2026-05-21

**Notes:**
- Pro individual ≠ Business plan. Business adds admin controls, org billing, security features.
- Upgrades for Pro/Pro+ are currently paused as GitHub rolls out flexible billing.
- Business includes Claude, Codex, GPT-5 mini access across GitHub + VS Code.

---

## Claude (Anthropic)

### Individual Plans

| Plan | Price | Notes |
|------|-------|-------|
| Free | $0 | Basic Claude access, limited usage |
| Pro | $20/month (monthly) / $17/month (billed annually) | Claude Code, Cowork, deep research, memory |
| Max | From $100/month | 5x or 20x more usage than Pro, priority access, higher output limits |

### Team & Enterprise Plans

| Plan | Price | Notes |
|------|-------|-------|
| Team (Standard seat) | $20/seat/month (annual) / $25/seat/month (monthly) | Min 5 users, max 150; SSO, admin controls, Claude Code + Cowork included |
| Team (Premium seat) | $100/seat/month (annual) / $125/seat/month (monthly) | 5x usage vs standard seats |
| Enterprise | $20/seat + API usage | 20+ users; pooled usage, SCIM, audit logs, 500K context window, custom data retention |

### API Pricing (per million tokens)

| Model | Input | Output | Cache Write | Cache Read |
|-------|-------|--------|-------------|------------|
| Claude Opus 4.7 | $5 | $25 | $6.25 | $0.50 |
| Claude Sonnet 4.6 | $3 | $15 | $3.75 | $0.30 |
| Claude Haiku 4.5 | $1 | $5 | $1.25 | $0.10 |

**Batch processing: 50% discount on all models.**

**Source:** https://claude.ai/pricing — verified 2026-05-21
**Source (API):** https://anthropic.com/pricing — verified 2026-05-21

---

## ChatGPT (OpenAI)

### Individual Plans (Indian pricing shown — USD equivalents noted)

| Plan | Price (INR) | Approx USD | Notes |
|------|-------------|------------|-------|
| Free | ₹0 | $0 | Limited GPT-5.5 Instant, limited deep research |
| Go | ₹399/month | ~$5/month | More GPT-5.5 Instant access, more messages/uploads |
| Plus | ₹1,999/month | ~$24/month | Advanced reasoning (GPT-5.5 Thinking), expanded Codex, custom GPTs |
| Pro | ₹10,699/month | ~$128/month | 5x/20x more usage, unlimited Codex tasks, unlimited GPT-5.3 file uploads |

### Business Plans

| Plan | Price | Notes |
|------|-------|-------|
| Business Codex | Usage-based (no fixed seat fee) | AI software engineering, code review, automation, SAML SSO |
| Business ChatGPT & Codex | ₹1,800/user/month (~$22/user/month) | Everything in Plus + Codex; Slack/Drive/GitHub integrations; no model training |
| Enterprise | Custom | SCIM, EKM, extended context, 10 data residency regions, 24/7 support |

**Source:** https://chatgpt.com/pricing — verified 2026-05-21

**Notes:**
- USD prices are approximate conversions from INR; use official USD pricing page for US users.
- Business ChatGPT plan listed as ₹1,800/user/month; billed annually at ₹2,250/user/month if monthly.
- Pro plan note: "Double your normal Codex usage on ₹10,699/month tier until May 31, 2026."

---

## Gemini (Google)

> Gemini pricing is in INR on the Indian pricing page. USD equivalents are approximate.

| Plan | Price (INR) | Approx USD | Notes |
|------|-------------|------------|-------|
| Free | ₹0 | $0 | Gemini 3.5 Flash, limited 3.1 Pro access, 15GB storage |
| Google AI Plus | ₹399/month | ~$5/month | 2x usage vs Free, 200 Google Flow credits, 200GB storage |
| Google AI Pro | ₹1,950/month | ~$23/month | 4x usage vs Free, 1,000 Google Flow credits, Gemini in Gmail/Docs, YouTube Premium Lite, 5TB storage |
| Google AI Ultra | ₹6,500/month | ~$78/month | Up to 20x usage vs Pro, 10,000–25,000 Google Flow credits, Gemini 3 Pro/Deep Search, YouTube Premium Individual |

**Source:** https://gemini.google/subscriptions — verified 2026-05-21

**Notes:**
- Gemini API pricing is separate from consumer subscriptions — see API section below.
- Ultra plan starts at ₹6,500/month; ₹19,500/month for 20x tier.
- Google AI Ultra includes Deep Think and Gemini Spark (US-only, English-only as of screenshot date).

---

## Gemini API (Pay-per-token)

> Prices in USD per million tokens. Source: ai.google.dev/pricing + findskill.ai verified 2026-05-21.

### Standard Pricing (≤200K token context)

| Model | Status | Input ($/MTok) | Output ($/MTok) |
|-------|--------|----------------|-----------------|
| Gemini 2.5 Flash-Lite | GA | $0.10 | $0.40 |
| Gemini 3.1 Flash-Lite | GA (May 7, 2026) | $0.25 | $1.50 |
| Gemini 2.5 Flash | GA | $0.30 | $2.50 |
| Gemini 3.1 Pro | Latest flagship | $2.00 | $12.00 |
| Gemini 3.5 Flash | New (May 19, 2026) | $1.50 | $9.00 |

### Long-context Pricing (>200K tokens)

| Model | Input ($/MTok) | Output ($/MTok) |
|-------|----------------|-----------------|
| Gemini 3.1 Pro | $4.00 | $18.00 |
| Gemini 2.5 Flash | higher — see docs | higher |

### Batch / Flex Processing (50% off standard)

| Model | Input ($/MTok) | Output ($/MTok) |
|-------|----------------|-----------------|
| Gemini 3.1 Pro | $1.00 | $6.00 |
| Gemini 2.5 Flash-Lite | $0.125 | $0.75 |

### Context Caching

| Metric | Rate |
|--------|------|
| Cache write | $0.50 / MTok |
| Cache read | $0.20 / MTok |
| Storage | per hour fee (see docs) |

### Free Tier API Limits (as of May 2026)

| Model | Requests/Min | Requests/Day | Tokens/Min |
|-------|-------------|-------------|------------|
| Gemini 2.5 / 3.1 Flash-Lite | 30 | 1,500 | 1,000,000 |
| Gemini 2.5 / 3 Flash | 15 | 1,500 | 1,000,000 |
| Gemini 2.5 Pro | 5 | 50 | 250,000 |

**Source:** https://findskill.ai/blog/gemini-api-pricing-guide/ (updated May 15, 2026, citing ai.google.dev) — verified 2026-05-21

**Notes:**
- Free tier restricted to Flash models only from April 1, 2026. Pro model requires paid billing or Google AI Pro/Ultra subscription.
- Gemini 3.5 Flash (May 19, 2026) beats Gemini 3.1 Pro on coding at ~25% lower cost.
- Audio input priced higher than text: $0.50/MTok on Flash-Lite, $1.00/MTok on Flash.
- Grounding with Google Search: free monthly allocation per project; ~$14 per 1,000 grounded queries beyond allocation.

---

## Windsurf

> Windsurf pricing captured from official pricing page on 2026-05-21.

| Plan | Price | Notes |
|------|-------|-------|
| Hobby | Free | Limited Agent requests, limited Tab completions, no credit card required |
| Individual (Pro) | $16/month (yearly) | Extended limits, frontier model access, MCPs/skills/hooks, cloud agents, Bugbot (usage-based) |
| Teams | $32/user/month (yearly) | Cloud agents with shared context, team rules/automations, security review agent, SAML SSO, usage analytics |
| Enterprise | Custom | Pooled usage, SCIM, AI code tracking API, audit logs, granular admin controls |

**Monthly pricing:**
| Plan | Price |
|------|-------|
| Individual | $20/month |
| Teams | $40/user/month |

**Source:** https://windsurf.com/pricing — verified 2026-05-21

---

## Summary Reference Table (USD, per user/month, approx.)

| Tool | Free | Entry Paid | Mid-tier | Team/Business | Enterprise |
|------|------|-----------|----------|---------------|------------|
| Cursor | ✓ | $16–$20 | — | $32–$40 | Custom |
| GitHub Copilot | ✓ | $10 (Pro) | $39 (Pro+) | $19 (Business) | $39 |
| Claude | ✓ | $17–$20 | $100+ (Max) | $20–$25/seat | Custom |
| ChatGPT | ✓ | ~$5 (Go) | ~$24 (Plus) | ~$22 (Business) | Custom |
| Gemini | ✓ | ~$5 (AI Plus) | ~$23 (AI Pro) | — | — |
| Windsurf | ✓ | $16–$20 | — | $32–$40 | Custom |

---

## Audit Engine Pricing Logic Reference

### Key decision thresholds used in audit rules:

**Cursor:**
- Solo developer (<2 users) on Teams plan → downgrade to Individual → save $20+/user/month
- Team on monthly billing → switch to annual → save ~20% ($8/user/month on Teams)

**GitHub Copilot:**
- Individual on Pro+ ($39) for coding only → consider Copilot Pro ($10) if <300 premium requests/month suffice
- Business on Enterprise ($39) → check if Business ($19) covers needs; Enterprise mainly adds Spark + more premium requests

**Claude:**
- Pro users who primarily code → Claude Pro ($20) vs Cursor Individual ($20) — recommend based on use case
- Team Standard seat ($25 monthly) vs annual ($20) → push annual if committed team

**ChatGPT:**
- Plus users doing only coding → GitHub Copilot Pro ($10) may cover needs at 60% less
- Business Codex (usage-based) → estimate usage first; can be cheaper than flat $22/seat for light users

**Gemini:**
- AI Pro (~$23) vs Claude Pro ($20) for writing/research → comparable; Claude generally stronger for complex reasoning

**Windsurf vs Cursor:**
- Both ~$16–$20/month individual; Windsurf slightly cheaper on annual
- Teams pricing identical ($32–$40); differentiation is features, not price

---

*Last updated: 2026-05-21*
*All prices subject to change. Always verify at vendor pricing pages before finalizing audit logic.*

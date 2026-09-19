# Codex Instructions — Naskhah Thesis

## Repository boundary

Work only inside this repository. This project is independent from Naskhah Studio. Never modify or depend on an existing Naskhah Studio repository unless the user explicitly requests it.

## Non-negotiable architecture

- Next.js + TypeScript
- PostgreSQL
- Prisma
- Auth.js
- MinIO / S3-compatible object storage
- Tailwind CSS + shadcn/ui
- Zod
- Tiptap when the writing module is implemented
- Vitest and Playwright
- No Supabase

## Engineering rules

1. Read docs/ARCHITECTURE.md and docs/ROADMAP.md before substantial changes.
2. Keep a modular-monolith architecture with clear domain boundaries.
3. Never commit secrets or real credentials.
4. Enforce authorization on the server, not only in the UI.
5. Use database migrations for schema changes.
6. Avoid destructive migrations without an explicit migration/rollback plan.
7. Add or update tests for behavior changed.
8. Run available lint, typecheck, test, build, and migration checks before reporting completion.
9. Do not claim PASS for a check that was not executed.
10. Do not start a later phase automatically after completing the requested phase.

## Phase report

At the end of a phase report:

- baseline
- implementation summary
- schema/migrations
- security controls
- tests actually executed with PASS/FAIL
- known issues/debt
- Supabase absence check
- commit SHA(s)
- next recommended phase

Never hide failed tests or unresolved blockers.

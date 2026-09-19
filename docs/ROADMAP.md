# Development Roadmap

## Phase 0 — Foundation

Establish repository rules, architecture, environment contract, local infrastructure design, quality gates, and the initial application/database scaffold.

Exit gate:

- Next.js TypeScript application builds
- PostgreSQL development service defined
- MinIO development service defined
- Prisma schema validates and migrates from an empty database
- lint and typecheck pass
- smoke tests pass
- no Supabase package, URL, environment variable, client, or import exists

## Phase 1 — Authentication and RBAC

Auth.js credentials-based authentication, secure password hashing, admin-provisioned accounts by default, session invalidation, rate limiting, project membership, and server-side RBAC.

## Phase 2 — Thesis Workspace

Research project setup, programme, thesis structure, chapters/sections/subsections, navigation, statuses, targets, and workspace UX.

## Phase 3 — Progress Tracker

Progress calculations, milestones, deadlines, activity timeline, chapter readiness, and evidence-based completion.

## Phase 4 — Writing and Versioning

Tiptap writing workspace, autosave strategy, immutable versions, comparison, restore workflow, word counts, writing targets, and export preparation.

## Phase 5 — Supervisor Review

Submission workflow, supervisor access, comments, revision requests, decisions, review history, and audit trail.

## Phase 6 — Research Library

Research notes, references, attachments, MinIO files, citation metadata, evidence links, and alignment to thesis sections.

## Phase 7 — Dashboard and Production Readiness

Research Alignment Matrix, reporting, search, dashboard, audit views, backup/restore, security hardening, observability, CI/CD, deployment and production acceptance tests.

## Delivery rule

Do not skip phase gates. A later phase must not be declared complete while its required tests or prior dependencies are failing.

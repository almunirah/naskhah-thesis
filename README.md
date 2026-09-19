# Naskhah Thesis

A research and thesis management workspace for structured doctoral research planning, writing, supervision, evidence, references, progress tracking, and research alignment.

## Status

Phase 0 — Foundation

## Planned stack

- Next.js + TypeScript
- PostgreSQL
- Prisma ORM
- Auth.js
- Tailwind CSS + shadcn/ui
- MinIO (S3-compatible object storage)
- Zod
- Tiptap
- Vitest + Playwright

## Architecture principles

- Modular monolith
- PostgreSQL as the system of record
- Self-hostable storage via MinIO
- Role-based access control
- Versioned thesis writing
- Auditable supervisor feedback and progress
- No Supabase dependency

## Core research hierarchy

Programme → Research Project → Chapter → Section → Subsection → Writing Item → Version

The platform will also support a Research Alignment Matrix connecting research problems, research questions, research objectives, constructs, hypotheses, instruments, and analysis methods.

## Development phases

0. Foundation and architecture
1. Authentication and RBAC
2. Thesis workspace
3. Progress tracking
4. Writing and versioning
5. Supervisor review
6. References, research notes, and files
7. Dashboard, reporting, hardening, and production readiness

> This repository is independent from the existing Naskhah Studio project. Do not modify or couple to the Naskhah Studio repository.

# Naskhah Thesis Architecture

## Goal

Build a self-hostable research and thesis management platform focused on structured academic writing, progress, supervision, evidence, and research alignment.

## Technology baseline

- Application: Next.js with TypeScript
- UI: Tailwind CSS and shadcn/ui
- Database: PostgreSQL
- ORM: Prisma
- Authentication: Auth.js
- Validation: Zod
- Rich text: Tiptap
- Object storage: MinIO through the S3-compatible API
- Testing: Vitest and Playwright
- Deployment target: Docker-based Linux/KVM deployment

## Architecture

Use a modular monolith. Domain boundaries should remain explicit even though the application is deployed as one unit.

Initial domains:

- Identity and Access
- Research Projects
- Thesis Structure
- Writing and Versioning
- Progress and Milestones
- Supervisor Review
- Research Notes
- References
- File Assets
- Research Alignment
- Audit

## Research hierarchy

Programme
→ Research Project
→ Chapter
→ Section
→ Subsection
→ Writing Item
→ Writing Version

The implementation should allow deeper document nesting without redesigning the database.

## Research Alignment Matrix

The platform must eventually represent and link:

Problem Statement → Research Question → Research Objective → Construct → Hypothesis → Instrument → Analysis Method

Alignment records must be traceable back to the research project and must not depend on hard-coded chapter numbers.

## Roles

- SUPER_ADMIN
- ADMIN
- SUPERVISOR
- STUDENT

Authorization must be enforced server-side. UI hiding is not authorization.

## Data and storage

PostgreSQL is the system of record for structured data. Binary documents and research files are stored in MinIO. The database stores file metadata, ownership, object keys, checksums, MIME type, size, and audit information.

## Security principles

- No Supabase dependency.
- No secrets committed to Git.
- Passwords must never be stored in plaintext.
- Validate untrusted input at server boundaries.
- Enforce project membership and role checks server-side.
- Use least privilege for database and object-storage credentials.
- Record security-relevant and research-workflow changes in an audit trail.
- Production storage buckets are private by default.

## Repository boundary

This is a new standalone project. Do not read, modify, import from, or couple this repository to the existing Naskhah Studio project unless explicitly instructed in a future phase.

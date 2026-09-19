const modules = [
  ["Thesis Workspace", "Structure chapters, sections and writing items without locking the research into a rigid template."],
  ["Research Alignment", "Keep problems, questions, objectives, constructs, hypotheses, instruments and analysis aligned."],
  ["Progress & Supervision", "Track milestones, evidence, versions and supervisor feedback in one auditable workspace."],
];

export default function Home() {
  return (
    <main className="shell">
      <header className="header">
        <div className="brand">Naskhah Thesis</div>
        <div className="badge">Phase 0 · Foundation</div>
      </header>

      <section className="hero">
        <h1>From research problem to completed thesis.</h1>
        <p>
          A structured workspace for doctoral research planning, academic writing,
          research alignment, progress tracking and supervision.
        </p>
      </section>

      <section className="grid" aria-label="Planned modules">
        {modules.map(([title, description]) => (
          <article className="card" key={title}>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

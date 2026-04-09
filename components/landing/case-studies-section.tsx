import { ArrowUpRightIcon } from "./icons";

type CaseStudy = {
  title: string;
  client: string;
  problem: string;
  solution: string;
  result: string;
};

// Replace these placeholder studies with approved client cases when available.
const caseStudies: CaseStudy[] = [
  {
    title: "Lead Qualification Automation",
    client: "B2B service company",
    problem: "Too many manual lead checks and slow response times.",
    solution:
      "Built an AI-assisted qualification flow, CRM routing logic, and internal dashboard for review.",
    result: "Faster lead response, less manual work, and cleaner pipeline visibility.",
  },
  {
    title: "CRM Process Redesign",
    client: "Growing sales team",
    problem: "Messy handoffs, duplicate work, and poor status visibility.",
    solution: "Rebuilt deal stages, automations, and task logic directly inside the CRM.",
    result: "More consistent execution with fewer dropped opportunities.",
  },
  {
    title: "Internal AI Assistant for Operations",
    client: "Service business with repetitive internal requests",
    problem: "Team spent too much time answering recurring process questions.",
    solution: "Built an internal AI assistant connected to docs and workflow context.",
    result: "Reduced interruptions and faster team execution.",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="cases" className="border-b border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--ink-muted)]">CASE STUDIES</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[var(--ink)] sm:text-4xl">
          System redesign work grounded in operational reality.
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-white p-6">
              <h3 className="text-xl font-semibold text-[var(--ink)]">{study.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">Client: {study.client}</p>

              <dl className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                <div>
                  <dt className="font-medium text-[var(--ink)]">Problem</dt>
                  <dd>{study.problem}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[var(--ink)]">Solution</dt>
                  <dd>{study.solution}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[var(--ink)]">Result</dt>
                  <dd>{study.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-start">
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            Want a system like this? Let&apos;s map it.
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

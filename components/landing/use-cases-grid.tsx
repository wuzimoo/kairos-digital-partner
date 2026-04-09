import type { ComponentType, SVGProps } from "react";
import {
  ChartBarIcon,
  ChatIcon,
  DatabaseIcon,
  DocumentIcon,
  DotGridIcon,
  GridIcon,
  PipelineIcon,
  UserCogIcon,
} from "./icons";

type UseCase = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const useCases: UseCase[] = [
  {
    title: "Sales Operations",
    description: "Tighten handoffs, outreach logic, and deal progression across your team.",
    icon: ChartBarIcon,
  },
  {
    title: "CRM Workflows",
    description: "Set clear stages, routing rules, and automations that remove operational drift.",
    icon: PipelineIcon,
  },
  {
    title: "Lead Generation",
    description: "Design outbound and inbound sequences with practical qualification logic.",
    icon: DotGridIcon,
  },
  {
    title: "Client Onboarding",
    description: "Standardize kickoff, approvals, and setup flows for faster implementation.",
    icon: UserCogIcon,
  },
  {
    title: "Internal Tools",
    description: "Build focused interfaces for repetitive internal workflows and requests.",
    icon: GridIcon,
  },
  {
    title: "Support Automation",
    description: "Automate recurring responses while preserving control over service quality.",
    icon: ChatIcon,
  },
  {
    title: "Knowledge Systems",
    description: "Structure docs and operating context so teams find answers without delays.",
    icon: DocumentIcon,
  },
  {
    title: "Reporting & Analytics",
    description: "Create clean operational visibility from CRM, workflow, and delivery data.",
    icon: DatabaseIcon,
  },
];

export function UseCasesGrid() {
  return (
    <section id="use-cases" className="border-b border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--ink-muted)]">INDUSTRIES &amp; USE CASES</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[var(--ink)] sm:text-4xl">
          Where Kairos creates practical leverage.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map(({ title, description, icon: Icon }) => (
            <article key={title} className="group rounded-2xl border border-[var(--border)] bg-white p-5 transition hover:-translate-y-[2px] hover:border-[var(--border-strong)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--ink-soft)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

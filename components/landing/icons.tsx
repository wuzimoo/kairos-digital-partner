import type { SVGProps } from "react";

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 4.5L12.5 10L7 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 14L14 6M8 6H14V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DotGridIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {[4, 12, 20].map((x) =>
        [4, 12, 20].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" fill="currentColor" />),
      )}
    </svg>
  );
}

export function PipelineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7H10V17H4V7ZM14 4H20V10H14V4ZM14 14H20V20H14V14Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M10 12H14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ChartBarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 20V11M10 20V7M16 20V13M22 20V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UserCogIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 19C3 15.7 5.8 13 9 13C10.6 13 12.1 13.7 13.2 14.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 12.4V10.7M18 21.3V19.6M21.3 16H19.6M16.4 16H14.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 3H13L18 8V21H7V3Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13 3V8H18" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9.5 12.5H15.5M9.5 16.5H15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 5H19V15H9L5 19V5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 10H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function DatabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 6V18C5 19.7 8.1 21 12 21C15.9 21 19 19.7 19 18V6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 12C5 13.7 8.1 15 12 15C15.9 15 19 13.7 19 12" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function GridIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="7" height="7" stroke="currentColor" strokeWidth="1.4" />
      <rect x="13" y="4" width="7" height="7" stroke="currentColor" strokeWidth="1.4" />
      <rect x="4" y="13" width="7" height="7" stroke="currentColor" strokeWidth="1.4" />
      <rect x="13" y="13" width="7" height="7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

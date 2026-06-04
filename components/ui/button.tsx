import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(53,231,255,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-[rgba(53,231,255,0.35)] bg-[linear-gradient(135deg,#35e7ff,#4f8cff)] text-slate-950 shadow-[0_20px_40px_rgba(53,231,255,0.24)] hover:-translate-y-0.5 hover:shadow-[0_28px_54px_rgba(53,231,255,0.24)]",
        secondary:
          "border-[rgba(148,163,184,0.22)] bg-[rgba(12,18,32,0.75)] text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[rgba(53,231,255,0.45)] hover:bg-[rgba(15,23,42,0.92)]",
        ghost:
          "border-transparent bg-transparent text-[var(--foreground)] hover:bg-[rgba(15,23,42,0.65)]",
      },
      size: {
        default: "px-5 py-3",
        sm: "px-4 py-2.5 text-sm",
        lg: "px-6 py-3.5 text-base",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});

Button.displayName = "Button";

export { Button, buttonVariants };

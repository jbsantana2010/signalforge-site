"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

const base =
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-sm px-6 py-3";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-700 shadow-sm",
  secondary:
    "border border-neutral-300 text-neutral-800 hover:bg-neutral-100",
  ghost: "text-brand hover:underline underline-offset-4",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", href, ...props }, ref) => {
    const classes = `${base} ${variants[variant]} ${className}`;

    if (href) {
      return (
        <a href={href} className={classes} role="button">
          {props.children}
        </a>
      );
    }

    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = "Button";
export default Button;

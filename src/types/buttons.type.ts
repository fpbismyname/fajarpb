import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface ButtonInterface {
    label: string;
    href: string;
    variant?: ButtonVariants;
    icon?: string;
}
export type ButtonVariants =
    | "none"
    | "btn-default"
    | "btn-primary"
    | "btn-secondary"
    | "btn-accent"
    | "btn-outline"
    | "btn-link";

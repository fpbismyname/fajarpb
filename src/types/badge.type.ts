export interface BadgeInterface {
    label: string;
    icon?: string;
    variant?: BadgeVariants;
}
export type BadgeVariants = "" | "badge-primary" | "badge-secondary" | "badge-accent" | "badge-outline";

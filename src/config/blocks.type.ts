import type { BadgeInterface } from "../types/badge.type";
import type { ButtonInterface } from "../types/buttons.type";
import type { ImageType } from "../types/image.type";

export type TypeBlock =
    | "hero"
    | "feature-cards"
    | "list-cards"
    | "benefit-section"
    | "contact-form"
    | "cta-section"
    | "timeline-section"
    | "social-media";

// Blocks interface & etc
export interface BlockInterface<T> {
    name: string;
    type: TypeBlock;
    contents: T;
}

// Blocks type
export type HeroContentType = {
    title: string;
    reverse?: boolean;
    badge?: BadgeInterface;
    subtitle: string;
    image?: ImageType;
    actions?: Array<ButtonInterface>;
};

export type FeatureCardsContentType = {
    title: string;
    subtitle: string;
    children: Array<{
        icon?: string;
        title: string;
        description?: string;
        image?: ImageType;
        href?: string;
    }>;
};

export type ListCardsContentType = {
    title: string;
    subtitle: string;
    children: Array<{
        icon?: string;
        title: string;
        description?: string;
        image?: ImageType;
        href?: string;
        type?: string;
    }>;
};

export type BenefitsSectionContentType = {
    title: string;
    subtitle: string;
    children: Array<{
        title: string;
        icon: string;
        image?: string;
        href?: string;
    }>;
};

export type ContactFormContentType = {
    title: string;
    subtitle: string;
    fields: Array<{
        name: string;
        type: "email" | "text" | "number";
    }>;
};

export type CtaSectionContentType = {
    title: string;
    subtitle: string;
    actions: Array<ButtonInterface>;
};

export type TimelineContentType = {
    title: string;
    subtitle: string;
    children: Array<{
        periode: string;
        title: string;
        description: string;
    }>;
};

export type SocialMediaContentType = {
    title: string;
    subtitle: string;
    socials: Array<{
        label: string;
        href: string;
        icon: string;
    }>;
};

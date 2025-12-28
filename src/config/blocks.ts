import type {
    BenefitsSectionContentType,
    BlockInterface,
    CtaSectionContentType,
    HeroContentType,
    ListCardsContentType,
    SocialMediaContentType,
    TimelineContentType,
} from "./blocks.type";
import { fakerID_ID } from "@faker-js/faker";

const HeroBlock: BlockInterface<HeroContentType> = {
    name: "hero",
    type: "hero",
    contents: {
        title: "Hi, iam Fajar",
        subtitle: fakerID_ID.lorem.paragraph(),
        badge: {
            label: "Freelance web developer",
            icon: "lucide:code-xml",
            variant: "badge-accent",
        },
        image: {
            url: "https://dummyimage.com/600x400",
            alt: "hero section image",
        },
        actions: [
            {
                label: "About me",
                href: "#about",
                icon: "lucide:user",
                variant: "btn-primary",
            },
            {
                label: "My service",
                href: "https://fajardev.vercel.app",
                icon: "lucide:external-link",
                variant: "btn-outline",
            },
        ],
    },
};

const AboutBlock: BlockInterface<HeroContentType> = {
    name: "about",
    type: "hero",
    contents: {
        title: "About Me",
        subtitle: fakerID_ID.lorem.paragraph(),
        reverse: true,
        image: {
            url: "https://dummyimage.com/500x500",
            alt: "about image",
        },
    },
};

const TechnicalSkillsBlock: BlockInterface<BenefitsSectionContentType> = {
    name: "technical-skills",
    type: "benefit-section",
    contents: {
        title: "Technical skills",
        subtitle: fakerID_ID.lorem.sentence(),
        children: [
            {
                title: "HTML",
                icon: "devicon:html5",
                href: "/",
            },
            {
                title: "CSS",
                icon: "devicon:css3",
                href: "/",
            },
            {
                title: "Javascript",
                icon: "devicon:javascript",
                href: "/",
            },
            {
                title: "Node JS",
                icon: "devicon:nodejs",
                href: "https://nextjs.org",
            },
            {
                title: "React JS",
                icon: "devicon:react",
                href: "https://react.dev",
            },
            {
                title: "Next JS",
                icon: "devicon:nextjs",
                href: "https://nextjs.org",
            },
            {
                title: "Astro JS",
                icon: "devicon:astro",
                href: "https://astro.build",
            },
            {
                title: "Laravel",
                icon: "devicon:laravel",
                href: "https://laravel.com",
            },
            {
                title: "Tailwindcss",
                icon: "devicon:tailwindcss",
                href: "https://tailwindcss.com",
            },
            {
                title: "Mysql",
                icon: "devicon:mysql",
                href: "https://mysql.com",
            },
            {
                title: "Prisma",
                icon: "devicon:prisma",
                href: "https://prisma.com",
            },
            {
                title: "Git",
                icon: "devicon:git",
                href: "https://git.com",
            },
        ],
    },
};

const ExperienceBlock: BlockInterface<TimelineContentType> = {
    name: "experience",
    type: "timeline-section",
    contents: {
        title: "My Journey to be come programmer",
        subtitle: fakerID_ID.lorem.paragraph(),
        children: [
            {
                periode: "2018",
                title: "My first website.",
                description: fakerID_ID.lorem.paragraph(),
            },
            {
                periode: "2019",
                title: "My first game.",
                description: fakerID_ID.lorem.paragraph(),
            },
            {
                periode: "2023",
                title: "Creating education apps as gamedev.",
                description: fakerID_ID.lorem.paragraph(),
            },
            {
                periode: "2025",
                title: "Focusing on freelance web developer.",
                description: fakerID_ID.lorem.paragraph(),
            },
        ],
    },
};

const ShowcaseBlock: BlockInterface<ListCardsContentType> = {
    name: "showcase",
    type: "list-cards",
    contents: {
        title: "Showcases",
        subtitle: fakerID_ID.lorem.paragraph(),
        children: [
            {
                title: "CV Berkah Jaya Cianjur",
                description: fakerID_ID.lorem.sentence(),
                type: "landing_page",
                href: "https://cv-berkah-jaya.vercel.app",
                icon: "lucide:external-link",
            },
            {
                title: "Check you khodam",
                description: fakerID_ID.lorem.sentence(),
                type: "webapps",
                href: "https://cek-khodam-dirimu.vercel.app",
                icon: "lucide:external-link",
            },
            {
                title: "Randy Travel",
                description: fakerID_ID.lorem.sentence(),
                type: "landing_page",
                href: "https://randy-travel-cianjur.vercel.app",
                icon: "lucide:external-link",
            },
            {
                title: "Asteria Florist",
                description: fakerID_ID.lorem.sentence(),
                type: "catalog",
                href: "https://asteriaflorist.com",
                icon: "lucide:external-link",
            },
        ],
    },
};

const CtaBlock: BlockInterface<CtaSectionContentType> = {
    name: "cta",
    type: "cta-section",
    contents: {
        title: "Look at my services here.",
        subtitle: "Iam providing some services to make fast and high-performance landing page.",
        actions: [
            {
                label: "Check it out",
                href: "https://fajardev.vercel.app",
                variant: "btn-primary",
                icon: "lucide:external-link",
            },
        ],
    },
};

const SocialMediaBlock: BlockInterface<SocialMediaContentType> = {
    name: "social-media",
    type: "social-media",
    contents: {
        title: "Social media",
        subtitle: fakerID_ID.lorem.sentence(),
        socials: [
            {
                label: "Github",
                href: "https://github.com",
                icon: "cib:github",
            },
            {
                label: "Linkedin",
                href: "https://linkedin.com",
                icon: "cib:linkedin",
            },
            {
                label: "Facebook",
                href: "https://facebook.com",
                icon: "cib:facebook",
            },
            {
                label: "Tiktok",
                href: "https://tiktok.com",
                icon: "cib:tiktok",
            },
            {
                label: "Instagram",
                href: "https://instagram.com",
                icon: "cib:instagram",
            },
            {
                label: "Whatsapp",
                href: "https://whatsapp.com",
                icon: "cib:whatsapp",
            },
        ],
    },
};

export const Blocks = [
    HeroBlock,
    AboutBlock,
    ExperienceBlock,
    TechnicalSkillsBlock,
    ShowcaseBlock,
    CtaBlock,
    SocialMediaBlock,
];

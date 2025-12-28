import type { NavigationMenuInterface } from "./navigation.type";

export const NavigationMenu: NavigationMenuInterface = {
    brand: {
        title: "Fajar PB",
        href: "/",
    },
    menu: [
        {
            label: "Home",
            href: "/#",
        },
        {
            label: "About",
            href: "/#about",
        },
        {
            label: "Experience",
            href: "/#experience",
        },
        {
            label: "Showcase",
            href: "/#showcase",
        },
        {
            label: "Social media",
            href: "/#social-media",
        },
    ],
    rightButtons: [
        {
            label: "My Services",
            variant: "btn-outline",
            href: "https://fajardev.vercel.app",
            icon: "lucide:external-link",
        },
    ],
};

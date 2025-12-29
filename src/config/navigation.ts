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
            label: "Tentang saya",
            href: "/#about",
        },
        {
            label: "Pengalaman",
            href: "/#experience",
        },
        {
            label: "Proyek",
            href: "/#showcase",
        },
        {
            label: "Media sosial",
            href: "/#social-media",
        },
    ],
    rightButtons: [
        {
            label: "Jasa saya",
            variant: "btn-outline",
            href: "https://fajardev.vercel.app",
            icon: "lucide:external-link",
        },
    ],
};

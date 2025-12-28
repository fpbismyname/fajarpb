import { fakerID_ID } from "@faker-js/faker";
import type { SiteInterface } from "./site.type";

export const Site: SiteInterface = {
    title: "Fajar PB",
    description: fakerID_ID.lorem.sentence(),
    slogan: "",
    logo: {
        url: "./favicon.ico",
        alt: "logo fajar pb",
    },
};

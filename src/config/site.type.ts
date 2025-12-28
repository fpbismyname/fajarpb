import type { ImageType } from "../types/image.type";

export interface SiteInterface {
    title: string;
    description: string;
    logo?: ImageType;
    slogan?: string;
}

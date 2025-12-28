import type { ButtonInterface } from "../types/buttons.type";
import type { ImageType } from "../types/image.type";

export interface NavigationMenuInterface {
    brand: {
        title?: string;
        logo?: ImageType;
        href: string;
    };
    menu: Array<ButtonInterface>;
    rightButtons: Array<ButtonInterface>;
}

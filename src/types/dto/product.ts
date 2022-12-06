interface OakProductDTO {
    id: string;
    name: string;
    images: any[];
    description: { description: string };
    size: string[];
    price: number;
    material: string;
    category: OakProductCategory;
    featuresDescription: { featuresDescription: string };
    keywords: string;
    metaDescription: string;
}

enum OakProductCategoryEnum {
    all = "ALL",
    socks = "SOCKS",
    clothes = "CLOTHES",
    accessories = "ACCESSORIES",
}
type OakProductCategory =
    | OakProductCategoryEnum.all
    | OakProductCategoryEnum.socks
    | OakProductCategoryEnum.clothes
    | OakProductCategoryEnum.accessories;

export type { OakProductDTO, OakProductCategory };
export { OakProductCategoryEnum };

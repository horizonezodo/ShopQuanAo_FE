import { Variant } from "../Variant/variant.model";

export class Product {
    productId?: string;
    productName?: string;
    productDescription?: string;
    createAt?: number;
    updateAt?: number;
    thumbImg?: string;
    listImg?: string[];
    saleCount?: number;
    top?: boolean;
    categoryId?: string;
    activate?: boolean;
    variantInputs?: Variant[];
}


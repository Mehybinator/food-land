export interface FoodItem {
    id: number;
    name: string;
    imageUrl?: string;
    price: number;
    discountPercentage?: number | null;
    priceAfterDiscount?: number;
    description?: string;
    categoryId: number;
}

export interface Favorites extends FoodItem {
    category: string | null;
}

export interface Category {
    id: number;
    name: string;
    foods: FoodItem[];
}

export interface User {
    id: string,
    userName: string,
    normalizedUserName: string,
    email: string | null,
    normalizedEmail: string | null,
    emailConfirmed: boolean,
    passwordHash: string,
    securityStamp: string,
    concurrencyStamp: string,
    phoneNumber: number | null,
    phoneNumberConfirmed: boolean,
    twoFactorEnabled: boolean,
    lockoutEnd: number | null,
    lockoutEnabled: boolean,
    accessFailedCount: number
}


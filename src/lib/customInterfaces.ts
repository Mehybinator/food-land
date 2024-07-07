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

export interface CartItem {
    id: number,
    userId: string,
    foodId: number,
    quantity: number,
    food: Favorites,
}

export interface Cart {
    cartItems: CartItem[],
    cartCount: number
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

export interface Auth {
    isAuthed: boolean,
    token: string,
    userName: string,
    name: string,
    favorites: Favorites[],
    cart: Cart,
}

export interface Profile {
    name: string,
}
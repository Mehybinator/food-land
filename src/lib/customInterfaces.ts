export interface FoodItem {
	id: number;
	name: string;
	imageUrl?: string;
	price: number;
	discountPercentage?: number | null;
	priceAfterDiscount?: number;
	description?: string;
	categoryId?: number;
}

export interface Favorites extends FoodItem {
	category: string | null;
}

export interface CartItem {
	id: number;
	userId: string;
	foodId: number;
	quantity: number;
	food: Favorites;
}

export interface Cart {
	cartItems: CartItem[];
	cartCount: number;
}

export interface Category {
	id: number;
	name: string;
	foods: FoodItem[];
}

export interface User {
	id: string;
	userName: string;
	normalizedUserName: string;
	email: string | null;
	normalizedEmail: string | null;
	emailConfirmed: boolean;
	passwordHash: string;
	securityStamp: string;
	concurrencyStamp: string;
	phoneNumber: number | null;
	phoneNumberConfirmed: boolean;
	twoFactorEnabled: boolean;
	lockoutEnd: number | null;
	lockoutEnabled: boolean;
	accessFailedCount: number;
}

export interface Auth {
	token: string;
	userId: number;
	userName: string;
	name: string;
	favorites: number[];
	cart: { id: number; quantity: number }[];
	cartTotalPrice: number;
	cartCount: number;
}

export interface Profile {
	name: string;
}

export interface CartResponse {
	items: MappedCartResponsItem[];
	totalPrice: number;
}

export interface CartResponsItem {
	foodId: number;
	quantity: number;
	name: string;
	imageUrl?: string;
	decription: string;
	discountPercentage?: number | null;
	price: number;
	priceAfterDiscount?: number;
}

export interface MappedCartResponsItem extends Omit<CartResponsItem, 'foodId'> {
	id: number;
}

export interface Address {
	id: number;
	streetAddress: string;
	userId: string;
	user: null;
}

export interface Order {
	id: number;
	userId: string;
	orderDate: string;
	streetAddress: string;
	totalPrice: number;
	orderItems: OrderItem[];
}

export interface OrderItem {
	id: number;
	foodId: number;
	foodName: string;
	price: number;
	quantity: number;
	orderId: number;
}

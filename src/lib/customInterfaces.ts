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
  
export interface Category {
    id: number;
    name: string;
    foods: FoodItem[];
}
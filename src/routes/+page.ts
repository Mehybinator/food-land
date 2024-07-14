import type { PageLoad } from './$types';
import type { FoodItem, Category } from '$lib/customInterfaces';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`/api/Food/category`);
	const data: Category[] = await res.json();

	const discountedFoods: FoodItem[] = data
		.flatMap((category) => category.foods)
		.filter((food) => food.discountPercentage !== null);

	return { discounted: discountedFoods, categories: data };
};

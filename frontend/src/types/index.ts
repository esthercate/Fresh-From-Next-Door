export type HighlightFilters = {
	dealOfTheDay: boolean;
	freeShipping: boolean;
	bestSellers: boolean;
	latest: boolean;
};

export interface Product {
	id: number;
	name: string;
	category: string;
	image: string;
	price: number;
	rating: {
		average: number;
		count: number;
	};
	dealOfTheDay: boolean;
	shippingCost: number;
	isBestSeller: boolean;
	createdAt: Date;
	tags: string[];
}

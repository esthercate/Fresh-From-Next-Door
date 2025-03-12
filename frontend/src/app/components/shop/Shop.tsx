'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { CategoryList } from './components/CategoryList';
import { ProductCard } from './components/ProductCard';
import { fetchProducts } from '@/utils/api'; // ✅ Import fetchProducts
import { NotFound } from '../common/NotFound';
import { Filters } from '../filters';

// Define TypeScript types for Product
interface Product {
	id: number;
	name: string;
	category: string;
	image: string;
	price: number;
	rating: {
		average: number;
		count: number;
	};
}

// Define available categories (UI names)
const categories: string[] = [
	'All',
	'Fruits',
	'Vegetables',
	'Meats',
	'Bread',
	'Eggs',
	'Juices',
];

// Function to map UI category names to database format
const formatCategory = (uiCategory: string): string => {
	const categoryMap: Record<string, string> = {
		Fruits: 'fruit',
		Vegetables: 'vegetable',
		Meats: 'meat',
		Bread: 'bread',
		Eggs: 'egg',
		Juices: 'juice',
	};
	return categoryMap[uiCategory] || uiCategory.toLowerCase();
};

export const Shop: React.FC = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>('All');
	const [products, setProducts] = useState<Product[]>([]);
	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	// Fetch all products from API on mount
	useEffect(() => {
		const loadProducts = async () => {
			setLoading(true);
			const data = await fetchProducts(); // ✅ Fetch data from utils/api.ts
			setAllProducts(data);
			setProducts(data);
			setLoading(false);
		};

		loadProducts();
	}, []);

	// Update products when category is selected
	useEffect(() => {
		if (selectedCategory === 'All') {
			setProducts(allProducts);
		} else {
			const formattedCategory = formatCategory(selectedCategory);
			setProducts(
				allProducts.filter(
					(product) => product.category.toLowerCase() === formattedCategory
				)
			);
		}
	}, [selectedCategory, allProducts]);

	return (
		<div
			className="w-full"
			id="shop"
		>
			<Container className="flex flex-col gap-8">
				<SectionTitle title="Our Products" />

				{/* Category Filter */}
				<CategoryList
					categories={categories}
					selectedCategory={selectedCategory}
					onSelectCategory={setSelectedCategory}
				/>

				{/* Loading State */}
				<div className="flex justify-between gap-6 w-full">
					<div className="w-1/2">
						<Filters />
					</div>
					{loading ? (
						<p className="text-center text-lg font-semibold">
							Loading products...
						</p>
					) : (
						<div className="flex gap-4 md:gap-5 items-center flex-wrap">
							{products.length > 0 ? (
								products.map((product, index) => (
									<ProductCard
										key={product.id ?? `product-${index}`}
										product={product}
									/>
								))
							) : (
								<div className="w-full">
									<NotFound
										title="No Product Found"
										description="We can't find any item matching your search"
									/>
								</div>
							)}
						</div>
					)}
				</div>
			</Container>
		</div>
	);
};

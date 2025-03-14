'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { CategoryList } from './components/CategoryList';
import { ProductCard } from './components/ProductCard';
import { fetchProducts } from '@/utils/api'; // ✅ Import fetchProducts
import { NotFound } from '../common/NotFound';
import { Filters } from '../filters';
import { HighlightFilters, Product } from '@/types';

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
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [highlightFilters, setHighlightFilters] = useState<HighlightFilters>({
		dealOfTheDay: false,
		freeShipping: false,
		bestSellers: false,
		latest: false,
	});
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

	const resetFilters = () => {
		setSearchQuery('');
		setHighlightFilters({
			dealOfTheDay: false,
			freeShipping: false,
			bestSellers: false,
			latest: false,
		});
		setSelectedTags([]);
		setPriceRange([0, 100]);
	};

	// Fetch all products from API on mount
	useEffect(() => {
		const loadProducts = async () => {
			setLoading(true);
			const data = await fetchProducts(); // Fetch data from utils/api.ts
			setAllProducts(data);
			setProducts(data);
			setLoading(false);
		};

		loadProducts();
	}, []);

	// Filter products based on category and search query
	useEffect(() => {
		let filteredProducts = allProducts;

		// filter by category
		if (selectedCategory !== 'All') {
			const formattedCategory = formatCategory(selectedCategory);
			filteredProducts = filteredProducts.filter(
				(product) => product.category.toLowerCase() === formattedCategory
			);
		}

		// filter by search by product name
		if (searchQuery) {
			filteredProducts = filteredProducts.filter((product) =>
				product.name.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		// Filter by highlights
		if (highlightFilters.dealOfTheDay) {
			filteredProducts = filteredProducts.filter(
				(product) => product.dealOfTheDay
			);
		}
		if (highlightFilters.freeShipping) {
			filteredProducts = filteredProducts.filter(
				(product) => product.shippingCost === 0
			);
		}
		if (highlightFilters.bestSellers) {
			filteredProducts = filteredProducts.filter(
				(product) => product.isBestSeller
			);
		}
		if (highlightFilters.latest) {
			filteredProducts = filteredProducts.sort(
				(a, b) =>
					new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
			);
		}
		// Filter by tags
		if (selectedTags.length > 0) {
			filteredProducts = filteredProducts.filter((product) =>
				selectedTags.some((tag) =>
					product.tags.some(
						(productTag) => productTag.toLowerCase() === tag.toLowerCase()
					)
				)
			);
		}

		// Filter by price range
		filteredProducts = filteredProducts.filter(
			(product) =>
				product.price >= priceRange[0] && product.price <= priceRange[1]
		);

		setProducts(filteredProducts);
	}, [
		selectedCategory,
		searchQuery,
		highlightFilters,
		selectedTags,
		priceRange,
		allProducts,
	]);

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
				<div className="flex justify-between gap-2 w-full">
					<div className="w-1/5">
						<Filters
							onSearch={setSearchQuery}
							onFilterChange={setHighlightFilters}
							onTagToggle={(tag) => {
								setSelectedTags((prevTags) =>
									prevTags.includes(tag)
										? prevTags.filter((t) => t !== tag)
										: [...prevTags, tag]
								);
							}}
							selectedTags={selectedTags}
							onPriceChange={setPriceRange}
							resetFilters={resetFilters}
							searchQuery={searchQuery}
						/>
					</div>
					<div className="w-3/4">
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
				</div>
			</Container>
		</div>
	);
};

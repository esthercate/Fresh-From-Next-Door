import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

// Define the highlight options
const highlightOptions = [
	{ id: 'dealOfTheDay', label: 'Deal of the Day' },
	{ id: 'freeShipping', label: 'Free Shipping' },
	{ id: 'bestSellers', label: 'Best Sellers' },
	{ id: 'featuredProducts', label: 'Featured Products' },
];

export const FilterByHighlights = () => {
	return (
		<div className="flex flex-col gap-3">
			<p className="border-b border-grey pb-1 text-xs font-semibold">
				Highlights
			</p>
			{highlightOptions.map((option) => (
				<div
					key={option.id}
					className="flex items-center gap-2"
				>
					<Checkbox id={option.id} />
					<label
						htmlFor={option.id}
						className="text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						{option.label}
					</label>
				</div>
			))}
		</div>
	);
};

import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { HighlightFilters } from '@/types';

type Props = {
	onFilterChange: (filters: HighlightFilters) => void;
};

// Define the highlight options
const highlightOptions = [
	{ id: 'dealOfTheDay', label: 'Deal of the Day' },
	{ id: 'freeShipping', label: 'Free Shipping' },
	{ id: 'bestSellers', label: 'Best Sellers' },
	{ id: 'latest', label: 'Latest Products' },
];

export const FilterByHighlights = ({ onFilterChange }: Props) => {
	const [filters, setFilters] = useState<HighlightFilters>({
		dealOfTheDay: false,
		freeShipping: false,
		bestSellers: false,
		latest: false,
	});

	const handleCheckboxChange = (id: keyof HighlightFilters) => {
		const newFilters = { ...filters, [id]: !filters[id] };
		setFilters(newFilters);
		onFilterChange(newFilters); // Pass the updated filters to the parent
	};

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
					<Checkbox
						id={option.id}
						checked={filters[option.id as keyof HighlightFilters]}
						onCheckedChange={() =>
							handleCheckboxChange(option.id as keyof HighlightFilters)
						}
					/>
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

import React from 'react';
import { Search } from './Search';
import { FilterByHighlights } from './FilterByHighlights';
import { SortByPrice } from './SortByPrice';
import { SortByTags } from './SortByTags';
import { HighlightFilters } from '@/types';

type FiltersProps = {
	onSearch: (query: string) => void;
	onFilterChange: (filters: HighlightFilters) => void;
	onTagToggle: (tag: string) => void;
	selectedTags: string[];
	searchQuery: string;
	onPriceChange: (range: [number, number]) => void;
	resetFilters: () => void;
};

export const Filters = ({
	onSearch,
	onFilterChange,
	onTagToggle,
	selectedTags,
	onPriceChange,
	resetFilters,
	searchQuery,
}: FiltersProps) => {
	const handleReset = () => {
		resetFilters();
	};

	return (
		<div className="hidden md:flex flex-col gap-6">
			<div className="flex justify-end">
				<button
					className="hover:bg-green rounded-full text-xs w-fit px-2 py-0.5 text-green bg-white hover:text-white border border-green cursor-pointer"
					onClick={handleReset}
				>
					Reset
				</button>
			</div>
			<Search
				onSearch={onSearch}
				query={searchQuery}
			/>
			<FilterByHighlights onFilterChange={onFilterChange} />
			<SortByPrice onPriceChange={onPriceChange} />
			<SortByTags
				selectedTags={selectedTags}
				onTagToggle={onTagToggle}
			/>
		</div>
	);
};

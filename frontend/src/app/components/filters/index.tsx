import React from 'react';
import { Search } from './Search';
import { FilterByHighlights } from './FilterByHighlights';
import { SortByPrice } from './SortByPrice';
import { SortByTags } from './SortByTags';
import { HighlightFilters } from '@/types';

type FiltersProps = {
	onSearch: (query: string) => void; // Function to handle search input
	onFilterChange: (filters: HighlightFilters) => void;
};

export const Filters = ({ onSearch, onFilterChange }: FiltersProps) => {
	return (
		<div className="hidden md:flex flex-col gap-6">
			<Search onSearch={onSearch} />
			<FilterByHighlights onFilterChange={onFilterChange} />
			<SortByPrice />
			<SortByTags />
		</div>
	);
};

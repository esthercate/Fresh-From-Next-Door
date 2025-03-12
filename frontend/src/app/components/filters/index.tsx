import React from 'react';
import { Search } from './Search';
import { FilterByHighlights } from './FilterByHighlights';
import { SortByPrice } from './SortByPrice';
import { SortByTags } from './SortByTags';

type Props = {};

export const Filters = (props: Props) => {
	return (
		<div className="hidden md:flex flex-col gap-6">
			<Search />
			<FilterByHighlights />
			<SortByPrice />
			<SortByTags />
		</div>
	);
};

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type SearchProps = {
	onSearch: (query: string) => void; // Function to handle search input
};

export const Search = ({ onSearch }: SearchProps) => {
	const [query, setQuery] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newQuery = event.target.value;
		setQuery(newQuery);
		onSearch(newQuery); // Call the onSearch function with the new query
	};

	return (
		<div className="flex flex-col gap-3">
			<div className="flex justify-between items-center">
				<Label
					htmlFor="search"
					className="text-xs font-semibold"
				>
					Search
				</Label>
				<button className="hover:bg-green rounded-full text-xs w-fit px-2 py-0.5 text-green bg-white hover:text-white border border-green cursor-pointer">
					Reset
				</button>
			</div>
			<Input
				type="text"
				id="search"
				placeholder="Search by name"
				value={query}
				onChange={handleInputChange}
			/>
		</div>
	);
};

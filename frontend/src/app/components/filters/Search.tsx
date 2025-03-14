import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type SearchProps = {
	onSearch: (query: string) => void; // Function to handle search input
	query: string;
};

export const Search = ({ onSearch, query }: SearchProps) => {
	const [localQuery, setLocalQuery] = useState(query);

	// Sync local state with external prop when query updates (reset case)
	useEffect(() => {
		setLocalQuery(query);
	}, [query]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newQuery = event.target.value;
		setLocalQuery(newQuery);
		onSearch(newQuery);
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
			</div>
			<Input
				type="text"
				id="search"
				placeholder="Search by name"
				value={localQuery || ''}
				onChange={handleInputChange}
			/>
		</div>
	);
};

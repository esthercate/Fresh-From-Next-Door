import React from 'react';

export const NewsLetter = () => {
	return (
		<div className="flex flex-col">
			<label
				htmlFor="email"
				className="text-base mb-2"
			>
				Newsletter
			</label>
			<div className="flex gap-3">
				<input
					type="email"
					id="email"
					placeholder="example@example.com"
					className="py-1 px-2 border border-white rounded-lg w-full text-sm"
				/>
				<button className="py-1 px-2 border bg-white text-green cursor-pointer border-white rounded-lg hover:bg-green hover:text-white">
					Send
				</button>
			</div>
		</div>
	);
};

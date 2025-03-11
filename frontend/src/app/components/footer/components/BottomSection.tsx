import React from 'react';

export const BottomSection = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="flex justify-center items-center py-3">
			<p className="text-center text-xs">
				@freshfromnextdoor {currentYear}, All rights reserved.
			</p>
		</div>
	);
};

import React from 'react';
import Image from 'next/image';
import productImg from '../assets/pinneaple.svg';
import { MdAddCircle } from 'react-icons/md';

type ProductCardProps = {
	product: {
		id: number;
		name: string;
		price: string | number;
		image: string;
		rating: {
			average: number;
			count: number;
		};
	};
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const { name, price, rating, image } = product;
	const roundedRating = Math.round(rating?.average ?? 0); // Round average rating

	return (
		<div className="relative w-32 md:w-36 flex flex-col items-center p-1 border-2 border-grey rounded-lg shadow-lg">
			<div>
				<Image
					src={productImg}
					alt={name}
					width={200}
					height={200}
				/>
			</div>
			<div className="flex flex-col gap-3 text-center pb-5">
				<p className="mt-2 font-medium">{name}</p>

				{/* Star Ratings */}
				<div className="flex justify-center">
					{[...Array(5)].map((_, i) => (
						<svg
							key={i}
							className={`w-4 h-4 ${
								i < roundedRating ? 'text-yellow-500' : 'text-gray-300'
							}`}
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.196-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
						</svg>
					))}
				</div>

				{/* Display Price */}
				<p className="text-base font-bold text-green">
					${parseFloat(price.toString()).toFixed(2)}
				</p>
			</div>

			{/* Add to Cart Button */}
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full shadow-md">
				<MdAddCircle
					color="green"
					size={25}
					className="cursor-pointer"
				/>
			</div>
		</div>
	);
};

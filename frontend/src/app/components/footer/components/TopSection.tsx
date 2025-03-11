import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { SiYoutubemusic } from 'react-icons/si';
import Link from 'next/link';

export const TopSection = () => {
	return (
		<div className="flex flex-col md:flex-row gap-y-3 justify-between items-center border-b border-white pb-3">
			<Link
				href="/"
				className="font-bold"
			>
				FreshFromNextDoor
			</Link>
			<div className="flex gap-4">
				<FaFacebook
					size={25}
					className="cursor-pointer hover:animate-spin"
				/>
				<AiFillTwitterCircle
					size={25}
					className="cursor-pointer hover:animate-spin"
				/>
				<SiYoutubemusic
					size={25}
					className="cursor-pointer hover:animate-spin"
				/>
				<FaInstagramSquare
					size={25}
					className="cursor-pointer hover:animate-spin"
				/>
			</div>
		</div>
	);
};

import Link from 'next/link';
import React from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { MdOutlineShoppingCart, MdSearch } from 'react-icons/md';
import { Container } from '../common/Container';

export const Header = () => {
	return (
		<div className="w-full">
			<Container className="flex justify-between items-center py-5 px-5 md:px-10 border-b-1 border-grey">
				<Link
					href="/"
					className="text-green font-bold"
				>
					FreshFromNextDoor
				</Link>
				<div className="hidden md:flex gap-5 justify-center items-center font-bold text-base">
					<Link
						href="/"
						className="hover:text-green"
					>
						Home
					</Link>
					<Link
						href="#shop"
						className="hover:text-green"
					>
						Shop
					</Link>
					<Link
						href="#contact"
						className="hover:text-green"
					>
						Contact
					</Link>
				</div>
				<div className="flex gap-5 justify-center items-center ">
					<MdSearch
						size={30}
						className="cursor-pointer hover:text-green"
					/>
					<FaRegUser
						size={25}
						className="cursor-pointer hover:text-green"
					/>
					<MdOutlineShoppingCart
						size={28}
						className="cursor-pointer hover:text-green"
					/>
				</div>
			</Container>
		</div>
	);
};

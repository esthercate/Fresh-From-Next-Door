import React from 'react';
import { Container } from '../common/Container';
import { TopSection } from './components/TopSection';
import { MiddleSection } from './components/MiddleSection';
import { BottomSection } from './components/BottomSection';

export const Footer = () => {
	return (
		<div
			className="bg-green text-white"
			id="contact"
		>
			<Container>
				<TopSection />
				<MiddleSection />
				<BottomSection />
			</Container>
		</div>
	);
};

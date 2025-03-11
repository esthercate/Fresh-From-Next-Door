import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import Card from './components/Card';
import fruits from './assets/fruits.png';
import Image from 'next/image';
export const WhyChooseUs = () => {
	return (
		<Container className="w-full flex flex-col gap-8">
			<SectionTitle title="Why Choose us?" />
			<div className="flex flex-col md:flex-row justify-between gap-5 items-center">
				<Image
					src={fruits}
					width={500}
					height={490}
					alt="Fruits Image"
					className="shadow-lg rounded-lg"
				/>
				<div className="w-full md:w-1/2 lg:w-3/4 flex flex-wrap gap-y-5">
					<Card
						cardNumber="01"
						title="Organic Produce"
						description="Sit sint labore veniam pariatur aute consequat adipisicing reprehenderit. Ut velit minim labore cupidatat ipsum culpa ad ut irure anim. Pariatur commodo fugiat amet Lorem id."
					/>
					<Card
						cardNumber="02"
						title="Organic Produce"
						description="Sit sint labore veniam pariatur aute consequat adipisicing reprehenderit. Ut velit minim labore cupidatat ipsum culpa ad ut irure anim. Pariatur commodo fugiat amet Lorem id."
					/>
					<Card
						cardNumber="03"
						title="Organic Produce"
						description="Sit sint labore veniam pariatur aute consequat adipisicing reprehenderit. Ut velit minim labore cupidatat ipsum culpa ad ut irure anim. Pariatur commodo fugiat amet Lorem id."
					/>
					<Card
						cardNumber="04"
						title="Organic Produce"
						description="Sit sint labore veniam pariatur aute consequat adipisicing reprehenderit. Ut velit minim labore cupidatat ipsum culpa ad ut irure anim. Pariatur commodo fugiat amet Lorem id."
					/>
				</div>
			</div>
		</Container>
	);
};

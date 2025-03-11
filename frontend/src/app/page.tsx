import { Header } from './components//header/Header';
import { Footer } from './components/footer/Footer';
import { Hero } from './components/hero/Hero';
import { Shop } from './components/shop/Shop';
import { WhyChooseUs } from './components/why-choose-us/WhyChooseUs';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Hero />
			<Shop />
			<WhyChooseUs />
			<Footer />
		</div>
	);
}

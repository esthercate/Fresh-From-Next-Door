export const API_BASE_URL =
	process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5500';

export const fetchProducts = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/products`);
		if (!response.ok) {
			throw new Error('Failed to fetch products');
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching products:', error);
		return [];
	}
};

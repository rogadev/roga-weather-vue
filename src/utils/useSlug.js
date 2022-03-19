export const useSlug = (input) => {
	console.log('useSlug', input);
	let slug = null;

	const getSlug = () => {
		if (input) {
			slug = input
				.toString()
				.toLowerCase()
				.trim()
				.replaceAll(', ', '+')
				.replaceAll(' ', '+')
				.replaceAll(',', '+');
		} else slug = null;
	};

	getSlug();
	console.log('useSlug', slug);
	return { getSlug, slug };
};

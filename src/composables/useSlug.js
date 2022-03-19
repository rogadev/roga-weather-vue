/* Convert Slug Composable */
export const useSlug = (input) => {
	let slug = null;
	/* Convert input string to a slug */
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
	/* Covnerts on initialization */
	getSlug();
	/* getSlug creates a new slug with given input string, slug is the resulting slug string */
	return { getSlug, slug };
};

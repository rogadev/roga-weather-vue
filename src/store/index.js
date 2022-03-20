import { reactive } from 'vue';

export const store = reactive({
	state: {
		weather: {},
		currentConditions: {},
		forecast: [],
		location: null,
		locationSlug: null,
		loading: false,
		fetchCache: new Map(),
	},
});

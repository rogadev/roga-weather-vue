import { reactive } from 'vue';

export const store = reactive({
	state: reactive({
		currentConditions: null,
		forecast: null,
		location: null,
		locationSlug: null,
		loading: false,
		fetchCache: new Map(),
	}),
});

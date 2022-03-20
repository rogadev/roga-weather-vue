import { reactive } from 'vue';

export const store = reactive({
	state: reactive({
		weather: null,
		location: null,
		locationSlug: null,
		loading: false,
		fetchCache: new Map(),
	}),
});

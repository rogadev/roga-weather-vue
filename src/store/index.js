import { reactive } from 'vue';

export const store = reactive({
	state: {
		currentConditions: null,
		weekForecast: null,
		location: null,
		locationSlug: null,
		fetchCache: new Map(),
	},
});

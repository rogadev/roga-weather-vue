import { reactive } from 'vue';

export const store = reactive({
	state: {
		todaysForecast: null,
		weekForecast: null,
		location: null,
	},
});

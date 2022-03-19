import { ref } from 'vue';

import { useFetch } from '../composables/useFetch';
import { store } from '../store';

const getKey = () => {
	const currentHour = Math.floor(new Date().getTime() / 3600000);
	return `${currentHour}-${store.state.locationSlug}`;
};

const fetchWeather = async () => {
	const currentConditions = ref({});
	const forecast = ref({});
	const loading = ref({});

	store.state.loading = true;
	// Log
	console.log('Fetching weather...');

	// Fetch current conditions
	const WEATHER_DBI_API_URL = 'https://weatherdbi.herokuapp.com/data/weather/';
	const getWeather = useFetch(WEATHER_DBI_API_URL + store.state.locationSlug, {
		skip: true,
		key: getKey(),
	});
	await getWeather.fetch();

	// Update State
	// TODO - decide on whether to use state or export as composable
	store.state.currentConditions = currentConditions.value = {
		...getWeather.data.currentConditions,
	};
	store.state.forecast = forecast.value = { ...getWeather.data.next_days };
	store.state.loading = loading.value = false;

	// Log
	console.log('Weather fetch complete.');
};

export { fetchWeather };

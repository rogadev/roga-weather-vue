import { ref } from 'vue';

import { useFetch } from '../composables/useFetch';
import { store } from '../store';

import { useWeatherStore } from '../store/useWeather';
const weather = useWeatherStore;

const getKey = () => {
	const currentHour = Math.floor(new Date().getTime() / 3600000);
	return `${currentHour}-${store.state.locationSlug}`;
};

const fetchWeather = async () => {
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

	console.log('test', { ...getWeather.data.value });
	store.state.currentConditions = {
		...getWeather.data.value.currentConditions,
	};
	store.state.forecast = { ...getWeather.data.value.next_days };
	console.log('storae', store.state.currentConditions, store.state.forecast);
	store.state.loading = loading.value = false;

	// Log
	console.log('Weather fetch complete.');

	return {
		forecast: [...getWeather.data.value.next_days],
		currentConditions: { ...getWeather.data.value.currentConditions },
	};
};

export { fetchWeather };

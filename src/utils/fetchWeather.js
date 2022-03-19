import { computed } from 'vue';

import { useFetch } from '../composables/useFetch';
import { store } from '../store';

const currentHour = Math.floor(new Date().getTime() / 3600000);
const getKey = () => {
	return `${currentHour}-${store.state.locationSlug}`;
};

const fetchWeather = async () => {
	console.log('Fetching weather...');
	console.log(getKey());
	const WEATHER_DBI_API_URL = 'https://weatherdbi.herokuapp.com/data/weather/';
	const goFetch = async () => {
		store.state.loading = true;
		const getWeather = useFetch(
			WEATHER_DBI_API_URL + store.state.locationSlug,
			{ skip: true, key: getKey() }
		);
		await getWeather.fetch();
		// Update State
		store.state.currentConditions = { ...getWeather.data.currentConditions };
		store.state.weekForecast = { ...getWeather.data.next_days };
		store.state.loading = false;

		console.log('Weather fetched.');
	};

	goFetch();
};

export { fetchWeather };

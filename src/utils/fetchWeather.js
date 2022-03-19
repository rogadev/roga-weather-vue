import { useFetch } from '../composables/useFetch';
import { store } from '../store';

const fetchWeather = async (key = null) => {
	console.log('Fetching weather...');
	const WEATHER_DBI_API_URL = 'https://weatherdbi.herokuapp.com/data/weather/';
	const goFetch = async () => {
		store.state.loading = true;
		const config = key ? { skip: true, key: key } : { skip: true };
		const getWeather = useFetch(
			WEATHER_DBI_API_URL + store.state.locationSlug,
			config
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

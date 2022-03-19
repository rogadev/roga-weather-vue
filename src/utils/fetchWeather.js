import { ref, computed } from 'vue';

import { useFetch } from '../composables/useFetch';
import { useSlug } from '../composables/useSlug';

import { store } from '../store';

const WEATHER_DBI_API_URL = 'https://weatherdbi.herokuapp.com/data/weather/';

const fetchWeather = async (key = null) => {
	const goFetch = async () => {
		console.log('Fetching weather data...');

		const getWeather = useFetch(
			WEATHER_DBI_API_URL + store.state.locationSlug,
			{
				skip: true,
			}
		);
		await getWeather.fetch();
		const weather = { ...getWeather.response.value };
	};

	if (key) {
	} else {
	}
};

export { fetchWeather };

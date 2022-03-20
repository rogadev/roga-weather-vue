import { defineStore } from 'pinia';

export const useWeatherStore = defineStore('weather', {
	state: () => ({
		weather: {},
	}),
	getters: {
		getWeather: (state) => state.weather,
	},
});

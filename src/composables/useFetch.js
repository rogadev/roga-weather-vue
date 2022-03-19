import { ref, computed } from 'vue';
import axios from 'axios';
import { store } from '../store';

const fetchCache = computed(() => {
	return store.state.fetchCache;
});

export const useFetch = (url, config = {}) => {
	const data = ref(null);
	const error = ref(null);
	const loading = ref(false);
	const key = ref(null);

	// If we've been provided a key in config, use that to check cache or cache the response
	const usingCache = config.hasOwnProperty('key');
	if (usingCache) key.value = config.key;

	/**
	 * Fetch data from the provided url
	 * Provide a 'key' in config to cache the response
	 */
	const fetch = async () => {
		loading.value = true;

		// Our fetch logic
		const goFetch = async () => {
			try {
				const result = await axios.request({
					url,
					...config,
				});
				data.value = result.data;
			} catch (e) {
				console.error(e);
				error.value = e;
			} finally {
				loading.value = false;
			}
		};

		/**
		 * If we're using cache, and we have a key, return data from cache.
		 * Otherwise, fetch data and cache it.
		 * If we're not using cache, just fetch data.
		 */
		if (usingCache) {
			if (fetchCache.value.has(key.value)) {
				console.log('Using cached data for fetch to ' + url);
				data.value = fetchCache.value.get(key.value);
				loading.value = false;
			} else {
				await goFetch();
				fetchCache.value.set(key.value, data.value);
			}
		} else {
			await goFetch();
		}
	};

	// Uses short circuiting to fetch data if there's no skip flag in config object.
	!config.skip && fetch();

	return { error, data, loading, fetch };
};

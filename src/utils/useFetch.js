import { ref, computed, reactive } from 'vue';
import axios from 'axios';

export const useFetch = (url, config = {}) => {
	const data = ref(null);
	const response = ref(null);
	const error = ref(null);
	const loading = ref(false);
	const fetch = async () => {
		loading.value = true;
		try {
			console.log('fetching...');
			const result = await axios.request({
				url,
				...config,
			});
			response.value = result.data;
		} catch (e) {
			console.error(e);
			error.value = e;
		} finally {
			console.log('fetching done');
			loading.value = false;
		}
	};
	!config.skip && fetch();
	return { response, error, data, loading, fetch };
};

const cacheMap = reactive(new Map());

export const useFetchCache = (key, url, config) => {
	console.log('useFetchCache called - key:', key);
	const info = useFetch(url, { skip: true, ...config });

	const update = () => {
		console.log('fetchCache - update called');
		cacheMap.set(key, info.response.value);
	};
	const clear = () => {
		console.log('fetchCache - clear called');
		cacheMap.set(key, undefined);
	};

	const fetch = async () => {
		console.log('fetchCache - fetch called');
		try {
			console.log('fetchCache - fetching...');
			await info.fetch();
			update();
		} catch (e) {
			console.error('fetchCache - fetch error', e);
			clear();
		}
	};

	const response = computed(() => cacheMap.get(key));
	const data = computed(() => response.value?.data);

	if (response.value == null) fetch();

	return { ...info, fetch, data, response, clear };
};

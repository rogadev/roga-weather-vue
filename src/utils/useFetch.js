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
	console.log('useFetchCache called', key);
	const info = useFetch(url, { skip: true, ...config });

	const update = () => {
		console.log('update called');
		cacheMap.set(key, info.response.value);
	};
	const clear = () => {
		console.log('clear called');
		cacheMap.set(key, undefined);
	};

	const fetch = async () => {
		console.log('fetch cache - fetch called');
		try {
			console.log('fetch cache - fetching...');
			await info.fetch();
			update();
		} catch (e) {
			console.error('fetch cache - fetch error', e);
			clear();
		}
	};

	const response = computed(() => cacheMap.get(key));
	const data = computed(() => response.value?.data);

	return { ...info, fetch, data, response, clear };
};

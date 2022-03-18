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
			const result = await axios.request({
				url,
				...config,
			});
			response.value = result.data;
		} catch (e) {
			console.error(e);
			error.value = e;
		} finally {
			loading.value = false;
		}
	};
	!config.skip && fetch();
	return { response, error, data, loading, fetch };
};

const cacheMap = reactive(new Map());

export const useFetchCache = (key, url, config) => {
	const data = ref(null);
	const response = ref(null);
	const error = ref(null);
	const loading = ref(false);
	const fetch = async () => {
		loading.value = true;
		try {
			const result = await axios.request({
				url,
				...config,
			});
			response.value = result.data;
		} catch (e) {
			console.error(e);
			error.value = e;
		} finally {
			loading.value = false;
		}
	};
	if (cacheMap.has(key)) {
		data.value = cacheMap.get(key);
	} else {
		fetch();
	}
	return { response, error, data, loading, fetch };
};

import { useFetch } from '../composables/useFetch';
import { useSlug } from '../composables/useSlug';
import { store } from '../store';
const GEO_IP_LOOKUP_API_URL = 'https://json.geoiplookup.io/';

/* Get geo location based on ip address */
const fetchGeo = async () => {
	const getLocation = useFetch(GEO_IP_LOOKUP_API_URL, { skip: true });
	try {
		await getLocation.fetch();
	} catch (e) {
		alert(
			'Unable to determine your location. Please make sure adblocker is off.'
		);
	}

	store.state.location = `${getLocation.data.value.city}, ${getLocation.data.value.region}`;
	const getSlug = useSlug(store.state.location);
	store.state.locationSlug = getSlug.slug;
};

export { fetchGeo };

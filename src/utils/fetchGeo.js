import { ref, computed } from 'vue';

import { useFetch } from '../composables/useFetch';
import { useSlug } from '../composables/useSlug';

import { store } from '../store';

const GEO_IP_LOOKUP_API_URL = 'https://json.geoiplookup.io/';

/* Get geo location based on ip address */

export default async () => {
	console.log('Fetching location data...');
	const getLocation = useFetch(GEO_IP_LOOKUP_API_URL, { skip: true });
	await getLocation.fetch();
	store.state.location = `${getLocation.response.value.city}, ${getLocation.response.value.region}`;
	const getSlug = useSlug(store.state.location);
	store.state.locationSlug = getSlug.slug;
	console.log('Location data fetched!', store.state.location);
};

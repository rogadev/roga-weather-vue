import { reactive } from 'vue'

export const store = reactive({
  state: {
    request: {},
    current: {},
    forecast: {},
    location: null,
    locationSlug: null,
    loading: false,
    fetchCache: new Map(),
  },
})

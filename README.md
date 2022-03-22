# Roga Weather | Vue 3 + Vite + Tailwindcss

This simple weather app uses open API's to get your current location via IP address, then check the weather at your location. Created as part of a lab for ITAS197 Front End Web Development. More information below.

## Features

- Initially estimates your current location via IP address (Uses the [GeoIOLookup Open API](https://geoiplookup.io/) )
- Initially displays the current weather at your location (Uses the [WeatherDBI Open API](https://weatherdbi.herokuapp.com/documentation/v1))
- Allows the user to change the location by entering a city name and/or province/state.
- Caches each load, including the initial load.
- Cache uses the current hour since Epoch, and location, as the key.
- Repeate searching for a city name or province/state will load from cache.
- Every hour, on the hour, the data is re-fetched automatically from the API and re-rendered, based on the last location provided, to deliver the most up-to-date weather data.
- This UI is fully responsive and works great on mobile, tablet, and desktop.

## Built With

- Vue 3 Composition API
- Vue 3 Suspense API
- Vite
- Tailwindcss

## Implemented Design Patterns

- Composable Functions
- Helper Functions
- Custom Store

### About The Creator

Ryan Roga is a student at Vancouver Island University studying Web & Mobile Application Development. He is an award winning small business owner turned web developer. Currently looking for a summer co-op opportunity in web applicaiton development. He is familiar with Vue 3, React, Svelte, and Express. Find more information [on his website](https://www.roga.dev).

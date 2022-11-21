import axios from 'axios';

const directionsApi = axios.create({
	baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
	params: {
		alternatives: false,
		geometries: 'geojson',
		overview: 'simplified',
		steps: false,
		access_token: 'pk.eyJ1Ijoib3NjYXJnYWxpbmRvMSIsImEiOiJjbDZwZmxldTkwa2d1M2lxdWc2eHpmczgwIn0.GynY4v1JyHx-YD4e7S77Aw'
	}
})

export default directionsApi;
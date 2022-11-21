import axios from 'axios';

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
	params: {
		limit: 
		3,
		language: 'es',
		access_token: 'pk.eyJ1Ijoib3NjYXJnYWxpbmRvMSIsImEiOiJjbDZwZmxldTkwa2d1M2lxdWc2eHpmczgwIn0.GynY4v1JyHx-YD4e7S77Aw'
	}
})

export default searchApi;
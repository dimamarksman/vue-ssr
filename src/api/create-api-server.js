import axios from 'axios';

class Api {
  constructor({ weatherApiKey }) {
    this.weatherApi = axios.create({
      baseURL: `https://api.darksky.net/forecast/${weatherApiKey}`
    });
  }

  get onServer() {
    return true;
  }

  getWeatherByLatLong(latitude, longitude) {
    return this.weatherApi
      .get(`/${latitude},${longitude}`, {
        params: { units: 'si' }
      })
      .then(r => r.data);
  }

  fetchItem(id) {
    return new Promise(resolve => {
      setTimeout(() => resolve({ title: `Item ${id}` }), 500);
    });
  }
}

export function createApi(config) {
  return new Api(config);
}

import axios from 'axios';

const DARK_SKY_API_KEY = '0d774be3b35eda04913a20ae428959d2';

class Api {
  constructor(apiKey) {
    this.weatherApi = axios.create({
      baseURL: `https://api.darksky.net/forecast/${apiKey}`
    });
  }

  getWeatherByLatLong(latitude, longitude) {
    return this.weatherApi.get(`/${latitude},${longitude}`).then(r => r.data);
  }

  fetchItem(id) {
    return new Promise(resolve => {
      setTimeout(() => resolve({ title: `Item ${id}` }), 500);
    });
  }
}

export function createApi() {
  return new Api(DARK_SKY_API_KEY);
}

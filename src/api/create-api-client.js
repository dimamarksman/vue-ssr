import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create();
  }

  get onServer() {
    return false;
  }

  getWeatherByLatLong(lat, long) {
    return this.api
      .get('/weather', { params: { lat, long, units: 'si' } })
      .then(r => r.data);
  }

  fetchItem(id) {
    return new Promise(resolve => {
      setTimeout(() => resolve({ title: `Item ${id}` }), 500);
    });
  }
}

export function createApi(config) {
  axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
  };
  return new Api(config);
}

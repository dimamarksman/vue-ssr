import { createApi } from 'create-api';

export function createAPI(config) {
  const api = createApi({
    weatherApiKey: config.DARK_SKY_API_KEY
  });
  return api;
}

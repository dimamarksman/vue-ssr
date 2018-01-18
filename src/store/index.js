// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore(api) {
  return new Vuex.Store({
    state: {
      items: {},
      weather: null
    },
    actions: {
      FETCH_ITEM({ commit }, id) {
        // return the Promise via `store.dispatch()` so that we know
        // when the data has been fetched
        return api.fetchItem(id).then(item => commit('setItem', { id, item }));
      },
      FETCH_WEATHER({ commit }, { lat, long }) {
        return api.getWeatherByLatLong(lat, long).then(weather => {
          commit('setWeather', weather.currently);
        });
      }
    },
    mutations: {
      setItem(state, { id, item }) {
        Vue.set(state.items, id, item);
      },
      setWeather(state, weather) {
        state.weather = weather;
      }
    }
  });
}

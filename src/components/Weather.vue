<template>
  <pre>{{weather}}</pre>
</template>

<script>
export default {
  name: 'weather',
  asyncData({ store, route }) {
    const lat = route.query.lat || 49.988358;
    const long = route.query.long || 36.232845;
    return store.dispatch('FETCH_WEATHER', { lat, long });
  },
  computed: {
    // display the item from store state.
    weather() {
      return this.$store.state.weather;
    }
  }
};
</script>

<style lang="scss">

</style>

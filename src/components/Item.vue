<template>
  <div>{{ item.title }}</div>
</template>

<script>
export default {
  name: "about",
  asyncData({ store, route }) {
    // return the Promise from the action
    return store.dispatch("fetchItem", route.params.id);
  },
  computed: {
    // display the item from store state.
    item() {
      return this.$store.state.items[this.$route.params.id];
    }
  }
};
</script>

<style lang="scss">

</style>


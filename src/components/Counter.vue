<template>
  <div>
    <strong>{{ count }}</strong>
    <div>
      <button @click="increment">+</button>&nbsp;<button @click="decrement">-</button> 
    </div>
  </div>
</template>

<script>
// import the module here instead of in `store/index.js`
import counterStoreModule from "../store/modules/counter";

export default {
  asyncData({ store }) {
    store.registerModule("counter", counterStoreModule);
    return store.dispatch("counter/inc");
  },

  // IMPORTANT: avoid duplicate module registration on the client
  // when the route is visited multiple times.
  destroyed() {
    this.$store.unregisterModule("counter");
  },

  computed: {
    count() {
      return this.$store.state.counter.count;
    }
  },

  methods: {
    increment() {
      this.$store.dispatch("counter/inc");
    },
    decrement() {
      this.$store.dispatch("counter/dec");
    }
  }
};
</script>

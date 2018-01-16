<template>
  <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/counter">Counter</router-link>
      <router-link to="/items/12345">Item</router-link>
      <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: "app-header"
};
</script>

<style lang="scss">
.nav {
  max-width: 800px;
  margin: 25px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>

<template>
  <div id="app">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>


<script>
import AppHeader from "./components/Header.vue";

export default {
  name: "app-root",
  components: { AppHeader }
};
</script>

<style lang="scss">
body {
  font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  background-color: #f5f5f5;
  margin: 0;
  color: #34495e;
  overflow-y: scroll;
}

.view {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

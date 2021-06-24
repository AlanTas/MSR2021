<template>
  <div id="app">
    <nav>navbar</nav>
    <main id="listen">main</main>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    document.addEventListener("scroll", this.listenScroll);
  },
  destroyed() { // remember to remove the listener when destroy the components
    document.removeEventListener("scroll", this.listenScroll);
  },
  methods: {
    listenScroll() {
      let myScroll = document.querySelector("#listen").getBoundingClientRect()
        .top;
      console.log(myScroll);
    },
  },
};
</script>

<style>
nav {
  height: 100px;
}
main {
  height: 700px;
}
</style>


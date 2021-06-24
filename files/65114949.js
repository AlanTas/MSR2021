<html>

<head>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<div id="app">
  <span v-if="seen">Now you see me</span>

</div>
<script type="text/javascript">
  new Vue({
    el: "#app",
    data() {
      return {
        seen: true,
      };
    },
  });
</script>
<style>

</style>

</html>
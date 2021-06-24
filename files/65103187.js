<style>
  .butt {
    background:blue;
  }
  .butt.toggled {
    background:lightblue;
  }
</style>

<script>
  export let toggled = false

  function toggle() {
    toggled = !toggled
  }
</script>

<div
  on:click={toggle}
  class="butt"
  class:toggled
>sample button</div>

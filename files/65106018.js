<template>
  <div>
    <img :src="myLogoSrc" alt="my-logo" />
  </div>
</template>

<script lang="ts">
  // Please just use `@` to refer to the root "src" directory of the project
  import myLogoSrc from "@/assets/myLogo.svg";

  export default defineComponent({
    name: "MyComponent",

    setup() {
      return {
        myLogoSrc
      };
    }
  });
</script>

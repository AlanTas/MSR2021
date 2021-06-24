const router = new VueRouter({
  ...
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    }
    return { x: 0, y: 0 };  // Go to the top of the page if no hash
  },
  ...
})

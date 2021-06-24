Vue.component('mycomp', {
  template: `
  <div>
    <button @click="$emit('do', { text: 'return object from component'})">Emit</button>
  </div>
  `
})

new Vue({
  el: "#app",
  methods: {
    wrapDo(objectFromComp, myIntegerParameter) {
      console.log(objectFromComp, myIntegerParameter);
    }
  },
});
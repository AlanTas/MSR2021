const ReplicatorComponent = {
  template: `<div>
    <h1>replicator-component</h1>
    <slot name='element_1'></slot>
    <slot name='element_2'></slot>
    <slot name='element_3'></slot>
  </div>`
};

const records = [
  { "index": 1 },
  { "index": 2 },
  { "index": 3 },
];

Vue.component('my-component', {
  render: function(createElement) {
    return createElement(ReplicatorComponent, {
      attrs: {
        elements: records.length
      },
      scopedSlots: records.reduce((a,x) => ({
        ...a, 
        ['element_' + x.index]: () => 
          createElement( 'div', 'hello world')
       }), {})
    });
  },
});

new Vue({
  el: '#app',
  data: () => ({})
});
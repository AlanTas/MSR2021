new Vue({
  el: '#app',

  data() {
    return {
      form: {
        children: []
      }
    }
  },

  methods: {
    children(e) {
      const {
        children
      } = this.form;
      const popOrPush = e.target.value > children.length ? 'push' : 'pop';
      const difference = Math.abs(e.target.value - children.length);

      for (let i = 0; i < difference; i++) {
        this.form.children[popOrPush]({
          firstName: '',
          lastName: ''
        });
      }
    }
  }
});

Vue.config.productionTip = false;
Vue.config.devtools = false;
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>
<div id="app">
  <form>
    <label for="childrenCount">Amount of children</label>

    <input type="number" id="childrenCount" min="0" @input="children" />

    <template v-if="form.children.length > 0">
      <h2>Children</h2>

      <div
        v-for="(child, index) in form.children"
        :key="index">

        Child {{ index + 1 }}:

        <input
          type="text"
          placeholder="First name"
          v-model="child.firstName"
        />

        <input
          type="text"
          placeholder="Last name"
          v-model="child.lastName"
        />
      </div>
    </template>
  </form>
</div>
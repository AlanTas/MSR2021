new Vue({
  el: '#app',

  computed: {
    currentStep() {
      return this.steps.filter(s => s.order === this.activeStep);
    }
  },

  data: () => {
    return {
      activeStep: 1,
      steps: [{
          order: 1,
          title: "Title 1?",
          headline: "Headline 1",
          component: "product-info"
        },
        {
          order: 2,
          title: "Title 2",
          headline: "Headline 2.",
          component: "product-info"
        },
        {
          order: 3,
          title: "Title 3",
          headline: "Headline 3.",
          component: "product-info"
        },
        {
          order: 4,
          title: "Title 4!",
          headline: "Headline 4",
          component: "product-info"
        }
      ]
    };
  },
});

Vue.config.productionTip = false;
Vue.config.devtools = false;
.component-wrapper {
  width: 100%;
}

.steps-viewport {
  height: calc(100vh - 10rem);
  /* overflow: hidden */
  display: flex;
  flex-direction: column;
}

.step-wrapper {
  flex: 0 0 calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.steps-enter-active {
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.4s;
}

.steps-enter-to {
  opacity: 1;
  transform: translateY(0);
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>

<div id="app">
  <transition-group class="steps-viewport" name="steps" tag="div" appear>
    <div v-for="step in currentStep" :key="step.order" class="step-wrapper">
      <h3 class="is-size-5 mb-6 has-text-grey-light">
        Passo {{ step.order }}
      </h3>
      <h1 class="is-size-3">{{ step.title }}</h1>
      <h2 class="is-size-4 mt-2 has-text-grey">{{ step.headline }}</h2>
    </div>
  </transition-group>
</div>
new Vue({
  el: '#app',

  computed: {
    currentStep() {
      return this.steps.filter(s => s.order === this.activeStep);
    }
  },

  data: () => {
    return {
      activeStep: 1,
      steps: [{
          order: 1,
          title: "Title 1?",
          headline: "Headline 1",
          component: "product-info"
        },
        {
          order: 2,
          title: "Title 2",
          headline: "Headline 2.",
          component: "product-info"
        },
        {
          order: 3,
          title: "Title 3",
          headline: "Headline 3.",
          component: "product-info"
        },
        {
          order: 4,
          title: "Title 4!",
          headline: "Headline 4",
          component: "product-info"
        }
      ]
    };
  },
});

Vue.config.productionTip = false;
Vue.config.devtools = false;
.component-wrapper {
  width: 100%;
}

.steps-viewport {
  height: calc(100vh - 10rem);
  /* overflow: hidden */
  display: flex;
  flex-direction: column;
}

.step-wrapper {
  flex: 0 0 calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.steps-enter-active {
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.4s;
}

.steps-enter-to {
  opacity: 1;
  transform: translateY(0);
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>

<div id="app">
  <div v-for="step in currentStep" :key="step.order" class="step-wrapper">
    <transition-group class="steps-viewport" name="steps" tag="div" appear>
      <h3 class="is-size-5 mb-6 has-text-grey-light" key="1">
        Passo {{ step.order }}
      </h3>
      <h1 class="is-size-3" style="transition-delay: 0.1s" key="2">{{ step.title }}</h1>
      <h2 class="is-size-4 mt-2 has-text-grey" style="transition-delay: 0.2s" key="3">{{ step.headline }}</h2>
    </transition-group>
  </div>
</div>
new Vue({
  el: '#app',

  computed: {
    currentStep() {
      return this.steps.filter(s => s.order === this.activeStep);
    }
  },

  methods: {
    nextStep() {
      if (this.activeStep !== this.steps.length) {
        this.activeStep++;
      } else {
        this.activeStep = 1;
      }
    }
  },

  data: () => {
    return {
      activeStep: 1,
      steps: [{
          order: 1,
          title: "Title 1?",
          headline: "Headline 1",
          component: "product-info"
        },
        {
          order: 2,
          title: "Title 2",
          headline: "Headline 2.",
          component: "product-info"
        },
        {
          order: 3,
          title: "Title 3",
          headline: "Headline 3.",
          component: "product-info"
        },
        {
          order: 4,
          title: "Title 4!",
          headline: "Headline 4",
          component: "product-info"
        }
      ]
    };
  },
});

Vue.config.productionTip = false;
Vue.config.devtools = false;
.component-wrapper {
  width: 100%;
}

.steps-viewport {
  height: calc(100vh - 10rem);
  /* overflow: hidden */
  display: flex;
  flex-direction: column;
}

.step-wrapper {
  flex: 0 0 calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.step-wrapper,
.step-wrapper>* {
  transition: all 0.4s;
}

.step-wrapper>h1 {
  transition-delay: 0.1s;
}

.step-wrapper>h2 {
  transition-delay: 0.2s;
}

.steps-enter-active>* {
  opacity: 0;
  transform: translateY(100%);
}

.steps-leave-to>* {
  opacity: 0;
  transform: translateY(-100%);
}

.steps-enter-to>* {
  opacity: 1;
  transform: translateY(0);
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>

<div id="app">
  <transition name="steps" mode="out-in" duration="600" appear>
    <div v-for="step in currentStep" :key="step.order" class="step-wrapper">
      <h3 class="is-size-5 mb-6 has-text-grey-light">
        Passo {{ step.order }}
      </h3>
      <h1 class="is-size-3">{{ step.title }}</h1>
      <h2 class="is-size-4 mt-2 has-text-grey">{{ step.headline }}</h2>
    </div>
  </transition>
  <button @click="nextStep()">Next</button>
</div>
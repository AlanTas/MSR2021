export default {
  name: 'CustomHandlers',
  methods: {
    // handlers: (map, vm) => {
    // if it is arrow function,it can't do the trick 
    // thanks to  Yair Cohen
       handlers(map, vm) {
        const self = this;
        return {
          ...map, 50: e => {
            e.preventDefault();
            if( e.key === '@' && vm.search.length > 0 ) {
              vm.search = `${vm.search}@gmail.com`;
              // self will be this here
              const self2 = self;
            }
          },
        };
    },
  },
};

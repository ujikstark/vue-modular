import { createStore } from 'vuex';
import blog from '../modules/blog/stores';

const store = createStore({
  modules: {
    blog,
  },
});

export default store;

import {
  TO_HANDLE_CHANGE,
} from '../types';

export default {
  state: {
    number: 1,
  },

  getters: {
    getNumber: state => state.number,
  },

  actions: {
    handleChange: ({ commit }, { param }) => {
      commit(TO_HANDLE_CHANGE, { param });
    },
  },

  mutations: {
    [TO_HANDLE_CHANGE](state, { param }) {
      state.number = param;
    },
  },
};

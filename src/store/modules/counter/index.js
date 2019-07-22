
const sState = {
  count: 0,
};

const actions = {
  async increment(context) {
    const { commit } = context;
    console.log('hello');
    commit('increment');
  },
};

const mutations = {
  increment: (state) => {
    const obj = state;
    obj.count += 1;
  },
  decrement: (state) => {
    const obj = state;
    obj.count -= 1;
  },
};

export const counter = {
  namespaced: true,
  state: sState,
  mutations,
  actions,
};

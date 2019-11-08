export const state = () => {
  return {
    count: 0
  }
};

export const mutations = {
  inc(state) {
    state.count++;
  }
};

export const actions = {
  inc(context) {
    context.commit('inc');
  }
};

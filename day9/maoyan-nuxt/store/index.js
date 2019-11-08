import axios from 'axios';
export const state = function () {
  return {
    count: 0,
    maoyanData: undefined
  }
};

export const mutations = {
  inc(state) {
    state.count++;
  },
  setMaoyanData(state, maoyan) {
    state.maoyanData = maoyan
  }
};

export const actions = {
  async nuxtServerInit(context, httpContext) {
    // for (let p in httpContext) {
    //   console.log(p);
    // }

    let path = 'http://m.maoyan.com/ajax/movieOnInfoList?token=';
    let result = await axios.get(path);
    console.log(result.data);
    context.commit('setMaoyanData', result.data)
  },
  inc(context) {
    context.commit('inc')
  }
};

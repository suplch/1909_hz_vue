import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import { shopModule } from './shop'
import {counter} from './counter';

console.log(shopModule);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    age: 0,
    salary: 0
  },
  mutations: {  // 声明 突变 对象 用来修改state 全局状态
    setUser(state, user) {
      state.username = user.name;
      state.age = user.age
    },
    setSalary(state, salary) {
      state.salary = salary;
    }
  },
  actions: { // 声明 actions 动作对象 进行业务处理
    get_user_info(context) {
      console.log(context);
      return axios.get('/user/userinfo').then(async (result) => {
        console.log(result.data);
        context.commit('setUser', {
          name: result.data.name,
          age: result.data.age
        });
        await context.dispatch('get_salary')
        return 'ok';
      });
    },
    get_salary(context) {
      return axios.get('/user/usersalary').then((result) => {
        context.commit('setSalary', result.data.salary)
      })
    }
  },
  modules: {
    //shop: shopModule
    shop: shopModule,
    counter: counter
  }
})

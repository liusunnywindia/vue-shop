import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 1,
    sum: 0,
    money: 5000,
    author: 'ljq',
    chosenSend: '',
    pepo: [],
    order: '',
    orderlist: [],
    orderDetail: [],
    reviewlist: [[], [], []],
    address: [
      {
        name: '王小二',
        province: '11212',
        city: '3333',
        zip: '3333',
        tel: '15728003333',
        array: ''

      }
    ],
    activeName: 'first'
  },
  mutations: {

  }

})
export default store

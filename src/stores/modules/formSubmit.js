// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
const state = {
  username: '',
  password: '',
  phone: ''
}
const mutations = {
  updateUsername: (state, username) => {
    console.log('muatations', username)
  },
  updatePassword: (state, password) => {
    console.log('muatations', password)
  },
  updatePhone: (state, phone) => {
    console.log('muatations', phone)
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

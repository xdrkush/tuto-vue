import axios from 'axios'

const state = {
  price: {},
  converter: {}
}

const mutations = {
  mutPrice(state, value) {
    state.price = value
  },
  mutConverter(state, value) {
    state.converter = value
  }
}

const actions = {
  editSearchNewsData({ commit }, payload) {
    console.log(payload)
    commit('mutationSearchNewsData', payload)
  }
}

const getters = {
  getPrice: state => (
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => {
        console.log(res.data.bpi)
        state.price = res.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  )
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
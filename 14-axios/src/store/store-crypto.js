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
// Faire un refresh
const actions = {
  // eslint-disable-next-line no-empty-pattern
  changeConverter({commit}, payload) {
    const search = payload
    let converter = {
      EUR: {
        rate_float: state.price.EUR.rate_float,
        code: state.price.EUR.code,
        conversion: search * state.price.EUR.rate_float

      },
      USD: {
        rate_float: state.price.USD.rate_float,
        code: state.price.USD.code,
        conversion: search * state.price.USD.rate_float

      },
      GBP: {
        rate_float: state.price.GBP.rate_float,
        code: state.price.GBP.code,
        conversion: search * state.price.GBP.rate_float
      }
    }
    // console.log(converter)
    // console.log(search)
    commit('mutConverter', converter)
  }
}

const getters = {
  getPrice(state) {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => {
        console.log('je suis la')
        console.log(res.data.bpi)
        state.price = res.data.bpi
        state.converter = res.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
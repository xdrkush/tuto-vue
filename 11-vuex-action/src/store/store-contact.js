const state = {
  formMessage: {}
}

const mutations = {

}

const actions = {
  // eslint-disable-next-line no-empty-pattern
  sendMessage ({}, payload) {
    const data = payload
    console.log(data)
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
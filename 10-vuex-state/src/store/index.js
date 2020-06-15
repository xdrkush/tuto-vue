 
import Vue from 'vue'
import Vuex from 'vuex'

import home from './store-home'
import contact from './store-contact'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      home, contact
    },
    strict: process.env.DEV
  })

  return Store
}
import { createStore } from 'vuex'

import auth from './module_auth'
import jwt from './module_jwt'
import log from './module_log'
import rest from './module_rest'
import session from './module_session'
import timer from './module_timer'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    jwt,
    log,
    rest,
    session,
    timer,
  }
})

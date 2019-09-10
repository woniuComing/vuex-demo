import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

import cart from './modules/cart'
import product from './modules/product'


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        cart,
        product
    },
    state,
    mutations,
    getters,
    actions
})

export default store;
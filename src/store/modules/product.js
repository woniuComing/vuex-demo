import * as shop from '@/api/shop'

const state = {
    products: []
}

const getters = {}

const mutations = {
    setProducts(state, payload) {
        state.products = payload.products
    },
    decrementInventoty(state, payload) {
        // console.log(payload);
        const currentItem = state.products.find(item => item.id === payload.id);
        currentItem.inventory--;
    }
}

const actions = {
    async getAllProducts({ commit }) {
        console.log('before await', shop.getAllProducts());
        const products = await shop.getAllProducts();
        commit({
            type: 'setProducts',
            products
        })
    }
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
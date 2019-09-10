const state = {
    //购物车的数据
    // {id:商品的id,quantity:购物车商品数量}
    items: [],
    checkoutStatus: null
}

const getters = {
    cartProducts(state, getters, rootState) {
        return state.items.map((produ) => {
            const prod = rootState.product.products.find(item => item.id === produ.id);
            return {
                id: prod.id,
                title: prod.title,
                price: prod.price,
                quantity: produ.quantity
            }
        })
    },
    totalPrice(state, getters) {
        return getters.cartProducts.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0)
    }

}

const mutations = {
    pushProductToCart(state, payload) {
        // console.log(payload);
        state.items.push({
            id: payload.id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, payload) {
        console.log(payload);
        const cartItem = state.items.find(item => item.id === payload.id);
        cartItem.quantity++;
    }
}

const actions = {
    addProductTocart({ state, commit }, product) {
        // console.log(product);
        if (product.inventory) {
            const cardItem = state.items.find(item => item.id === product.id);
            if (cardItem) {
                commit({
                    type: 'incrementItemQuantity',
                    id: product.id
                })
            } else {
                commit({
                    type: 'pushProductToCart',
                    id: product.id
                })
            }
            //让商品的库存减1
            commit('product/decrementInventoty', { id: product.id }, { root: true })
        } else {
            console.log('商品的库存为空了');
        }
    }
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
<template>
    <div>
        <h2>cart</h2>
        <p v-show='!cartProducts.length'> please add some products to carts</p>
        <ul>
            <li v-for='(item,index) in cartProducts' :key='index'>
                <p>{{item.title}}--{{item.price}}X {{item.quantity}}</p>
            </li>
        </ul>
        <p>Total: {{totalPrice}}</p>
        <button :disabled='!cartProducts.length'>checkout</button>
    </div>
</template>
<style>

</style>
<script>
import { mapState,mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters('cart',['cartProducts','totalPrice'])
    },
    
}
</script>

<template>
    <div>
        <p>product</p>
        <ul>
            <li v-for='(item) in products' :key="item.id">
                <span>{{item.title}} - {{item.price}}</span>
                <br>
                <button @click='addProductTocart(item)' :disabled='item.inventory <=0'>add to shopping-cart</button>
            </li>
        </ul>
    </div>
</template>
<style>

</style>
<script>
import { mapState,mapActions } from 'vuex';
export default {
    computed:{
        ...mapState('product',['products'])
    },
    created(){
       this.$store.dispatch('product/getAllProducts');
    },
    methods:{
        ...mapActions('cart',['addProductTocart'])
    }
}
</script>



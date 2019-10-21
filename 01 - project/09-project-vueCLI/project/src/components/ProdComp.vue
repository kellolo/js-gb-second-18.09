<template>
    <div class="products">
        <product 
        v-for="product of filtered" 
        :key="product.id_product"
        :img="imgCatalog"
        :product="product"></product>
    </div>
</template>

<script>
import product from './ProdItem.vue'
export default {
    data: function () {
        return {
            products: [],
            imgCatalog: 'https://placehold.it/200x150',
            catalogUrl: '/catalogData.json',
            filtered: []
        }
    },
    components: {
        product
    },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    }
}
</script>

<style>

</style>
<template>
    <div class="products">
        <catalog-item v-for="product of filtered" :key="product.id_product" :product="product">
        </catalog-item>
    </div>
</template>

<script>
import catalogItem from './CatalogItem.vue'
export default {
    data: function(){
        return {
            filtered: [],
            products: [],
            url: '/api/products',
            err: 'Каталог товаров: запрос на сервер вернул ошибку.'
        }
    },
    components:{
        'catalog-item': catalogItem
    },
    methods:{
        filterCatalog(filter){
            const reg = new RegExp(filter, 'i')            
            this.filtered = this.products.filter(el => reg.test(el.product_name))
        }
    },
    async mounted(){
        let res = await this.$parent.getJson(this.url)
        this.products = res
        this.filtered = res
    }
}
</script>

<style>

</style>
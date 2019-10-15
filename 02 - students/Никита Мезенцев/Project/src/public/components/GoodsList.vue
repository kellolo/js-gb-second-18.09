<template>
    <div class="goods-list">
        <goods-item v-for="item of catalog" :key="item.id" :item="item"/>
    </div>
</template>

<script>
import Vuex from 'vuex'
import GoodsItem from './GoodsItem.vue'

export default {
    components: {
        'goods-item': GoodsItem
    },
    computed: {
        ...Vuex.mapGetters({
            catalog: 'filteredCatalog'
        })
    },
    methods: {
        ...Vuex.mapActions(['fetchCatalog'])
    },
    mounted () {
        this.fetchCatalog()
    }
}
</script>

<style>
.goods-list {
    display: grid;
    padding: 2rem 4rem;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-gap: 3rem;
    justify-content: center;
}
</style>

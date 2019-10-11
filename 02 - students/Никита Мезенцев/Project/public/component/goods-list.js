import goodsItem from './goods-item.js'

export default {
    components: {
        'goods-item': goodsItem
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
    },
    template: `<div class="goods-list">
                        <goods-item v-for="item of catalog" :key="item.id" :item="item"/>
                    </div>`
}

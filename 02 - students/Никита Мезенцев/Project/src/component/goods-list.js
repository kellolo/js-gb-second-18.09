Vue.component('goods-list', {
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
                        <goods-item v-for="item of catalog" :key="item.id_product" :item="item"/>
                    </div>`
})

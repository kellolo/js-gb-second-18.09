export default  {
    data: () => ({
        focused: false
    }),
    computed: {
        filter: {
            get () {
                return this.$store.state.filter
            },
            set (val) {
                this.$store.commit('setFilter', val)
            }
        }
    },
    template: `<div class="search-input" :class="{ focused }">
                <input class="search-control" placeholder="Search..." v-model="filter" @focus="focused = true" @blur="focused = false">
            </div>`
}

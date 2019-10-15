<template>
    <div class="search-input" :class="{ focused }">
        <input class="search-control" placeholder="Search..." v-model="filter" @focus="focused = true" @blur="focused = false">
    </div>
</template>

<script>
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
    }
}
</script>

<style>
.search-input {
    margin: 0 10px;
    margin-left: auto;
    position: relative;
    padding: 5px;
    display: flex;
    justify-content: center;
}
.search-input:before,
.search-input:after {
    content: '';
    position: absolute;
    display: block;
    top: 100%;
    width: 100%;
    height: 1px;
    background-color: #fff;
    opacity: 0.3;
    transition: linear .2s;
}
.search-input:after {
    opacity: 1;
    width: 0;
}
.search-control {
    color: inherit;
    background: none;
    border: none;
    outline: none;
    position: relative;
}
.search-input.focused:after,
.search-input:focus-within:after {
    width: 100%;
}
</style>

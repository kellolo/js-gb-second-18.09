<template>
    <form action="#" class="search-form" @submit.prevent="$parent.$refs.cata.filterCatalog(filter)">
        <input type="text" class="search-field" v-model.lazy="filter">
        <button class="btn-search" type="submit">
            <i class="fas fa-search"></i>
        </button>
    </form>
</template>

<script>
export default {
    data: function(){
        return {
            filter: ''
        }
    }
}
</script>

<style>

</style>
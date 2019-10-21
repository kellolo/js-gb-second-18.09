<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <filter-com></filter-com>
                <cart ref="cart"></cart>
            </div>
        </header>
        <main>
            <products ref="products"></products>
            <error ref="error"></error>
        </main>
    </div>
</template>

<script>

import cart from './CartComp.vue'
import products from './ProdComp.vue'
import filterCom from './FilterComp.vue'
import error from './ErrorComp.vue'

export default {
    data: function () {
        return {

        }
    },
    components: {
        'products': products, 
        'cart': cart, 
        'filter-com': filterCom, 
        'error': error
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error)
                    console.log(error)
                })
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error)
                    console.log(error)
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error)
                    console.log(error)
                })
        },
        deleteJson(url){
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error)
                    console.log(error)
                })
        }
    }
}
</script>

<style>

</style>
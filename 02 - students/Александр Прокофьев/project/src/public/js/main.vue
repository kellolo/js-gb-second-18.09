<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <filter-tag ref="filter"></filter-tag>
                <button class="btn-cart" type="button" @click="cart_toggle = !cart_toggle">Корзина</button>
                <cart ref="cart" :toggle="cart_toggle"></cart>
            </div>
        </header>
        <main>
            <catalog ref="cata"></catalog>            
        </main>
        <error ref="err_notifier"></error>
    </div>  
</template>

<script>
import cart from './CartComp.vue'
import catalog from './CatalogComp.vue'
import filterComp from './FilterComp.vue'
import error from './ErrorComp.vue'


export default {
    data: function(){
        return {
            cart_toggle: false //признак, переключатель видимости корзины
        }
    },
    components:{
        cart, 
        catalog,
        error,
        'filter-tag': filterComp
    },
    methods:{
        async getJson(url){
            return fetch(url)
                .then(res => res.json())
                .catch(err => {
                    this.$refs.err_notifier.flashErrMsg(err.message)
                    console.log(err)
                })
        },
        //добавление нового товара в корзину
        async postJson(url, data){
            return fetch(url, 
                    {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                .then(res => res.json())
                .catch(err => {
                    this.$refs.err_notifier.flashErrMsg(err.message)
                    console.log(err)
                })
        },
        //редактирование товара в корзине
        async putJson(url, data){
            return fetch(url, 
                    {
                        method: 'PUT',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                .then(res => res.json())
                .catch(err => {
                    this.$refs.err_notifier.flashErrMsg(err.message)
                    console.log(err)
                })
        },
        //удаление товара из корзины
        async deleteJson(url){
            return fetch(url, 
                    {
                        method: 'DELETE',
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                .then(res => res.json())
                .catch(err => {
                    this.$refs.err_notifier.flashErrMsg(err.message)
                    console.log(err)
                })
        }
    }
}
</script>

<style>

</style>
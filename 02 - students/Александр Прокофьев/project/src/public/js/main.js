import cart from './cart'
import catalog from './catalog'
import search from './filter'
import error from './error-notifier'

let app = {
    el: '#app',
    data:{
        cart_toggle: false //признак, переключатель видимости корзины
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
    },
    components: {
        cart, catalog, search, error
    }
}

export default app

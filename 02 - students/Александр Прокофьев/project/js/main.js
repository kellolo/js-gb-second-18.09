//заглушки (имитация базы данных)
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

let app = new Vue ({
    el: '#app',
    data:{
        cart_toggle: false //признак, переключатель видимости корзины
    },
    methods:{
        async getData(url){
            return fetch(`${API_URL + url}`)
        }
    },
    computed:{

    },
    mounted(){
        // console.dir(this)
    }
})

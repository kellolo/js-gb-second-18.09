//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
//const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
//const API_URL = 'https://raw.githubusercontent.com/VaGoryainova/js-gb-second-18.09/master/02%20-%20students/Виктория%20Горяйнова/HW/3/async'
const API_URL = '';

let app = new Vue ({
    el: '#app',
    data: {
        err: '',
        openCart: false,
        products: []
    },
    methods: {
        getJson(url) {
            return fetch(`${API_URL + url}`)
            .then(result => result.json())
            .catch(error => {
                this.err = error;
            })
        },
        postJson(url, data) {
            return fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(result => result.json())
                .catch(error => {
                    this.err = error;
                })
        },
        putJson(url, data) {
            return fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(result => result.json())
                .catch(error => {
                    this.err = error;
                })
        }
    },
    async mounted() {
        
    }
})


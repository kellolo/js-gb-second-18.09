//заглушки (имитация базы данных)
// const image = 'https://placehold.it/200x150';
// const cartImage = 'https://placehold.it/100x80';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

let app = new Vue({
    el: '#app',
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error)
                    console.log(error)
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
                    this.$refs.error.setError(error)
                    console.log(error)
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
                    this.$refs.error.setError(error)
                    console.log(error)
                })
        },
        delJson(url, data) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error)
                    console.log(error)
                })
        },
    }
})


// let app = new Vue({
//     el: '#app',
//     data: {
//         err: '',
//         filter: ''
//     },
//     methods: {
//         getData(url) {
//             return fetch(`${API_URL + url}`)
//         },

//         filterCatalog() {
//             const reg = new RegExp(this.filter, 'i')
//             this.filtered = this.filtered.filter(el => reg.test(el.product_name))
//         }
//     },
//     async mounted() {

//     }
// })


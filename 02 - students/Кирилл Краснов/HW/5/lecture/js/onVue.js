 let app = new Vue({
                el: '#app',
                data: {
                    name: 'Jon Due',
                    text: '',
                    email: 'jon.due@mail.ru',
                    vueStyle: { color: "red" },
                    trigger: false,
                    //данные созданные внутри компоненита
                    arrJSON: [
                        {
                            "name": "Notebook",
                            "id": 1,
                            "price": 1000,
                            "image": "https://placehold.it/200x150"
                        },
                        {
                            "name": "Display",
                            "id": 2,
                            "price": 200,
                            "image": "https://placehold.it/200x150"
                        },
                    ],
                    arr: null
                },
                computed: {
                    //типа функции
                    calcClass() {
                        return this.trigger ? 'font-it' : ''
                    }
                },
                methods: {
                    //методы
                    methodChangeTrigger(trigger) {
                        this.trigger = !this.trigger
                    },
                    clickHandler() {
                        alert('click');s
                    }
                },
                //ХУКИ-события на которые завязан цикл жизни компонента
                async mounted() {
                    // this.arr=JSON.parse(this.arrJSON)
                    // console.log(this.arr)
                    this.arr=await fetch('json/products.json')
                        .then (data=>data.json())
                }
            })
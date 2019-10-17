const API_URL = ".";

const app = new Vue({
    el: '#app',
    data: {
        // goods: [],
        // filteredGoods: [],
        // cartGoods: [],
        // searchLine: '',
    },
    methods: {
        getData(url) {
            return fetch(`${API_URL + url}`);
        },
    },
});

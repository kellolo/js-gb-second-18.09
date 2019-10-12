const app = new Vue({
    el: "#app",
    data: {
        API_URL: 'https://raw.githubusercontent.com/amsv/js-gb-second-18.09/master/02%20-%20students/Aleksey%20Amosov/project/js',

    },
    methods: {
       async getData (url) {
           return fetch(`${this.API_URL + url}`)
        }
    }
  });
  
 
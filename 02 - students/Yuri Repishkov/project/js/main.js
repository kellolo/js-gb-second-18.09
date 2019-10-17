const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue ({
	el: '#app',
	methods: {
		getJson (url) {
			return fetch(url)
				.then (result => result.json())
				.catch(error => {
					this.$refs.error.setError(error)
					console.log(error)
				})
		}
	}
})
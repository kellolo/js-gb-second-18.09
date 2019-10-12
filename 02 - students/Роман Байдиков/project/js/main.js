let app = new Vue({
    el: '#app',
    data:{
        x:[],
        cartItem:{},
        totalCost:0,
        findInCart:{},
        ProductsList:[],
        productId:0,
        filteredProducts:[],
        Cart:[],
        searchLine:'',
        imgProduct : 'https://placehold.it/200x150',
        imgCart : 'https://placehold.it/100x80',
        isVisibleCart : false,
        API_URL : 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        },
    
    methods: {
        filterProducts() {
            if (this.searchLine.length > 0) {
                this.filteredProducts = this.ProductsList.filter(elem => elem.product_name.toLowerCase().includes(this.searchLine.toLowerCase()))
            }
             else {
                 this.filteredProducts = this.ProductsList;
                }
        },

        clickBuyBtn(){
            this.productId = +event.target.dataset.id;
            this.findInCart = this.Cart.find(element => element.id_product == this.productId); //Ищем добавляемый товар в корзине
            if (!this.findInCart){
                this.cartItem = this.ProductsList.find(element => element.id_product == this.productId); //находим объект для корзины из списка товаров
                this.cartItem.quantity=1;
                this.totalCost += this.cartItem.price;
                this.Cart.push(this.cartItem);
            }
            else {
                this.findInCart.quantity++;
                this.totalCost += this.findInCart.price;
                this.$forceUpdate();
            }
        },

        clickDelBtn(){
            this.productId = +event.target.dataset.id;
            this.findInCart = this.Cart.find(element => element.id_product == this.productId); //Ищем удаляемый товар в корзине
            if (this.findInCart.quantity > 1) {
                this.findInCart.quantity--;
                this.totalCost -= this.findInCart.price;
                this.$forceUpdate();
            }
            else {
                this.Cart.splice(this.Cart.indexOf(this.findInCart),1);
                this.totalCost -= this.findInCart.price;
            }
}
    },
    async mounted () {
        this.ProductsList = await fetch(`${this.API_URL}/catalogData.json`)
            .then (data => data.json ())
            this.filteredProducts = this.ProductsList;
    }
})

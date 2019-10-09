Vue.component('cart-item', {
    props: ['product'],
    data() {
        return {
            cartImage: 'https://placehold.it/100x80'
        }
    },
    template: `
            <div class="cart-item" >
                <div class="product-bio">
                    <img :src="cartImage" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{product.name}}</p>
                        <p class="product-quantity">Quantity: {{product.quantity}}</p>
                        <p class="product-single-price">{{product.price}} each</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">{{product.quantity * product.price}} $</p>
                    <button class="del-btn" :data-id="product.id" @click="$parent.outFromCart(product)">&times;</button>
                </div>
            </div>
    `
})


Vue.component('cart-block', {
    props: [],
    data() {
        return {
            selected: []
        }
    },
    async mounted() {
        this.$root.$on('refreshCart', function(prod) {
            this.$root.$refs.cabl.refreshCart(prod);
        });

    },
    template: `
            <div class="cart-block">
                <cart-item v-for="product in selected" :key="product.id" :product="product" ></cart-item>
            </div>
    `,
    methods: {
        refreshCart(prod) {
            this.selected = prod;
            console.log(this.selected.length);
        },
        outFromCart(product) {
            --product.quantity;
            debugger;
        }
    },
})
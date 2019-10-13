Vue.component ('cart', {
  props: [
  ],
  data () {
    return {
      urlBasket: '/getBasket.json',
      cartItems: [],
      sumCarts: 0,
      isVisibleCart: false,
    }
  },
  async mounted () {
    let rezult = null
    try {
      rezult = await this.$parent.getData (this.urlBasket)
      .then (data => data.json ()) 
    }
    catch (error) {
      rezult = []
      this.err = error
    }
    finally {
      this.cartItems = rezult
      this.getSumCart     
    }
  },
  computed: {
    getSumCart (){
      this.sumCarts = this.cartItems.reduce(function(sum, current) { return sum + current.quantity * current.price }, 0) 
    }    
  },
  methods: {
    changeVisibleCart () {
      this.isVisibleCart = !this.isVisibleCart; 
    },
    addProduct (product) {
      let find = this.cartItems.find(el => el.id_product === product.id_product)
      if (find) {
        for (let el of this.cartItems) {
          if (el.id_product === product.id_product) {
            el.quantity++
            }  
        }
      } else {
        let prod = Object.assign({quantity: 1}, product)
        this.cartItems.push (prod)
      }
      this.getSumCart  
    },
    delCart (product) {
      let find = this.cartItems.find(el => el.id_product === product.id_product)
      if (find) {
        for (let el of this.cartItems) {
          if (el.id_product === product.id_product) {
            el.quantity--
          }  
        }
      }
      this.getSumCart 
    },
  },
  template: `
    <div class="cart">
      <button class="btn-cart" type="button" @click="changeVisibleCart">Корзина</button>
      <div class="cart-block" v-show="isVisibleCart">
          <div><p>Общая цена: {{ sumCarts }}</p><hr>
              <cart-item v-for="cart of cartItems" :key="cart.id_product" :cart="cart"></cart-item>
          </div>
      </div>
    </div>
  `
})

Vue.component ('cart-item', {
  props: [
    'cart'
  ],
  data () {
    return {
      cartImage: 'https://placehold.it/100x80',
    }
  },
  template: `
    <div class="cart-item" v-if="cart.quantity > 0">
      <div class="product-bio">
          <img :src="cartImage" alt="">
          <div class="product-desc">
              <p class="product-title">{{ cart.product_name }}</p>
              <p class="product-quantity">Кол-во:{{ cart.quantity }}</p>
              <p class="product-single-price">{{ cart.price }} руб. за ед.</p>
          </div>
      </div>
      <div class="right-block">
          <p class="product-price">{{ cart.quantity * cart.price }}</p>
          <button class="del-btn" :data-id="cart.id_product" @click="$root.$refs.cart.delCart (cart)">&times;</button>
      </div>
    </div>
  `
})

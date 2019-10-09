Vue.component ('product-item', {
  props:[
    'product'
  ],
  data () {
    return {
      imgCatalog: 'https://placehold.it/200x150',  
    }
  },
  mounted () {
    //console.log(this)
  },
  template: `
      <div class="product-item" :data-id="product.id_product" >
              <img :src="imgCatalog" alt="Some img">
              <div class="desc">
                  <h3>{{ product.product_name }}</h3>
                  <p>{{ product.price }} руб.</p>
                  <button class="buy-btn" 
                  :data-id="product.id_product"
                  :data-name="product.product_name"
                  :data-image="imgCatalog"
                  :data-price="product.price"
                  @click="$parent.addProduct (product)">Купить</button>
              </div>
          </div>
  `
})



Vue.component ('catalog', {
  props: [
    'search'
  ],
  data () {
    return {
      products: [],
      filteredProducts: [],
      url: '/catalogData.json',
      searchLine: ''
    }
  },
  async mounted () {
    let rezult = null
    try {
      rezult = await this.$parent.getData (this.url)
      .then (data => data.json ())
      console.log(this.search)
    }
    catch (error) {
      rezult = []
      this.err = error
    }
    finally {
      this.products = rezult

      this.filterCatalog ()     
    }

  },
  methods: {
    addProduct (item) {
      console.log(item.id_product)
    },
    filterCatalog () {
        const regexp = new RegExp(this.searchLine, 'i');
        this.filteredProducts = this.products.filter(good => {  
        return regexp.test(good.product_name); 
        })
        
    } 
  },
  template: `
    <div class="products">
    <product-item v-for="product of filteredProducts" :key="product.id_product" :product="product"></product-item>        
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
  async mounted () {
 
  },
  methods: {
  },
  template: `
    <div class="cart-item">
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
          <button class="del-btn" :data-id="cart.id_product">&times;</button>
      </div>
    </div>
  `
})

Vue.component ('carts', {
  props: [
  ],
  data () {
    return {

      urlBasket: '/getBasket.json',
      carts: [],
      sumCarts: 0,
      isVisibleCart: false,
    }
  },
  async mounted () {
    let rezult = null
    try {

      rezult = await this.$parent.getData (this.urlBasket)
      .then (data => data.json ())
      this.sumCarts = rezult.reduce(function(sum, current) {
      return sum + current.quantity * current.price;
      }, 0) 
    }
    catch (error) {
      rezult = []
      this.err = error
    }
    finally {
      this.carts = rezult     
    }

  },
  methods: {
    changeVisibleCart () {
      this.isVisibleCart = !this.isVisibleCart; 
    },
    delCart (item) {
      console.log(item.id_product)
    },
  },
  template: `
    <div class="cart">
      <button class="btn-cart" type="button" @click="changeVisibleCart">Корзина</button>
      <div class="cart-block" v-show="isVisibleCart">
          <div><p>Общая цена: {{ sumCarts }}</p><hr>
              <cart-item v-for="cart of carts" :key="cart.id_product" :cart="cart"></cart-item>
          </div>
      </div>
    </div>
  `
})

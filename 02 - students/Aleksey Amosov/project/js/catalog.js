Vue.component ('product-item', {
  props:[
    'product'
  ],
  data () {
    return {
      imgCatalog: 'https://placehold.it/200x150',  
    }
  },
  template: `
      <div class="product-item">
              <img :src="imgCatalog" alt="Some img">
              <div class="desc">
                  <h3>{{ product.product_name }}</h3>
                  <p>{{ product.price }} руб.</p>
                  <button class="buy-btn" 
                  :data-id="product.id_product"
                  :data-name="product.product_name"
                  :data-image="imgCatalog"
                  :data-price="product.price"
                  @click="$root.$refs.cart.addProduct (product)">Купить</button>
              </div>
          </div>
  `
})
Vue.component ('catalog', {
  props: [],
  data () {
    return {
      products: [],
      filteredProducts: [],
      url: '/catalogData.json',
    }
  },
  async mounted () {
    let rezult = null
    try {
      rezult = await this.$parent.getData (this.url)
      .then (data => data.json ())
    }
    catch (error) {
      rezult = []
      this.err = error
    }
    finally {
      this.products = rezult     
      this.filteredProducts = rezult     
    }
  },
  methods: {
    addProduct (item) {
      console.log(item.id_product)
    },
    filterCatalog (value) {
        const regexp = new RegExp(value, 'i');
        this.filteredProducts = this.products.filter(good => regexp.test(good.product_name))
        
    } 
  },
  template: `
    <div class="products">
      <product-item v-for="product of filteredProducts" :key="product.id_product" :product="product"></product-item> 
    </div>
  `
})


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const delay = (ms) => async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export default new Vuex.Store({
  state: {
    search: '',
    shoppingCart: [],
    productList: [
      { name: 'Casa', price: 100.0, color: 'red', category: 'inmueble', discount: 20, offer: true },
      { name: 'Bote', price: 100.0, color: 'green', category: 'transporte', discount: 0, offer: false },
      { name: 'Avión', price: 100.0, color: 'blue', category: 'transporte', discount: 0, offer: false },
      { name: 'Motocicleta', price: 100.0, color: 'royalblue', category: 'transporte', discount: 10, offer: true },
      { name: 'Computadora', price: 100.0, color: 'black', category: 'tecnología', discount: 20, offer: true },
      { name: 'Silla', price: 100.0, color: 'coral', category: 'hogar', discount: 0, offer: false },
      { name: 'Mesa', price: 100.0, color: 'gold', category: 'hogar', discount: 10, offer: true },
      { name: 'Gato', price: 100.0, color: 'orange', category: 'mascota', discount: 0, offer: false },
      { name: 'Café', price: 100.0, color: 'brown', category: 'hogar', discount: 0, offer: false },
      { name: 'Parlante', price: 100.0, color: 'grey', category: 'tecnología', discount: 0, offer: false },
      { name: 'Espejo', price: 100.0, color: 'blueviolet', category: 'hogar', discount: 10, offer: true },
      { name: 'Bicicleta', price: 100.0, color: 'aqua', category: 'transporte', discount: 0, offer: false },
      { name: 'Libro', price: 100.0, color: 'yellow', category: 'intelectual', discount: 20, offer: true },
      { name: 'Plancha', price: 100.0, color: 'fuchsia', category: 'hogar', discount: 10, offer: true },
    ]
  },
  getters: {
    filteredProductList(state) {
      return state.productList.filter(
        (product) =>
          state.search.length > 2 &&
          Object.values(product).join(',').includes(state.search)
      )
    },
    shoppingCartTotal(state) {
      return state.shoppingCart.reduce((accumulator, producto) => {
        accumulator =
          accumulator +
          (producto.price - (producto.price * producto.discount) / 100) *
            producto.qty
        return accumulator
      }, 0)
    }
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.productList.push(newProduct)
    },
    ADD_PRODUCT_TO_SHOPPING_CART(state, newProduct) {
      state.shoppingCart.push(newProduct)
    },
    REMOVE_PRODUCT_FROM_SHOPPING_CART(state, productIndex) {
      state.shoppingCart.splice(productIndex, 1)
    },
    ADD_QTY_TO_SHOPPING_CART_ITEM(state, productIndex) {
      state.shoppingCart[productIndex].qty++
    },
    SUB_QTY_TO_SHOPPING_CART_ITEM(state, productIndex) {
      state.shoppingCart[productIndex].qty--
    }
  },
  actions: {
    async agregarProducto(context, newProduct) {
      await delay(2000)
      context.commit('ADD_PRODUCT', { ...newProduct })
    },
    async agregarProductoAlCarritoDeCompras(context, newProduct) {
      setTimeout(() =>{
        alert("Producto agregado al carrito")
        const productIndexInShoppingCart = context.state.shoppingCart.findIndex(
          (product) => {
            return product.name === newProduct.name &&
              product.category === newProduct.category
              ? product
              : undefined
          }
        )
        if (productIndexInShoppingCart >= 0) {
          context.commit(
            'ADD_QTY_TO_SHOPPING_CART_ITEM',
            productIndexInShoppingCart
          )
        } else {
          context.commit('ADD_PRODUCT_TO_SHOPPING_CART', { ...newProduct, qty: 1 }, 1000)
        }
      }, 300)
    },
    agregarCantidadAlProductoDelCarritoDeCompras(context, indiceProducto) { 
      context.commit('ADD_QTY_TO_SHOPPING_CART_ITEM', indiceProducto)
    },
    restarCantidadAlProductoDelCarritoDeCompras(context, indiceProducto) {
      if (context.state.shoppingCart[indiceProducto].qty >= 2) {
        context.commit('SUB_QTY_TO_SHOPPING_CART_ITEM', indiceProducto)
      } else {
        context.commit('REMOVE_PRODUCT_FROM_SHOPPING_CART', indiceProducto)
      }
    }
  }
})

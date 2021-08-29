<template>
  <div class="carrito pl-5">
    <h2>Carrito de Compras</h2>
    <ul>
      <li class="mb-2" v-for="(product, $index) in $store.state.shoppingCart" :key="$index">
        {{ product.name }} | {{ product.category }} | ${{ product.price }} |
        {{ product.offer ? `${product.discount}% OFF` : '' }} | Cantidad:
        <button class="btn btn-info btn-sm ml-2 mr-1" @click="$store.dispatch('restarCantidadAlProductoDelCarritoDeCompras', $index)"> - </button>
        {{ product.qty }}
        <button class="btn btn-info btn-sm ml-1" @click="$store.dispatch('agregarCantidadAlProductoDelCarritoDeCompras',$index)"> + </button>
      </li>
    </ul>
    <p v-if="$store.state.shoppingCart.length > 0">
      El total de tu compras es: ${{
        $store.getters['shoppingCartTotal']
      }}
    </p>
    <p v-else>No tienes productos en tu carrito de compras</p>
    <button class="btn btn-info btn-sm" @click="comprar">Comprar</button>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  methods: {
    comprar () {
      setTimeout(() => {
        alert('Compra realizada con éxito')
        setTimeout(() =>{
          this.$store.state.shoppingCart = []
        },1000);
      },1000);
    }
  }
}

</script>

<style>
/* .carrito {
  -
} */
</style>

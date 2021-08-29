<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-md-6 col-lg-4 pt-3   " v-for="(product, $index) in $store.state.productList" :key="$index">
        <div class="card" style="width: 18rem">
          <img src="../assets/logo.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }} {{product.offer ? `| ${product.discount}% OFF` : ''}} </h5>
            <p class="card-subtitle">${{ product.price }}</p>
            <p class="card-text mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <button class="btn btn-info" @click="$store.dispatch('agregarProductoAlCarritoDeCompras', product)">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products'
}
</script>

<style></style>

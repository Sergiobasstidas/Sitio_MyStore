<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-light bg-dark px-5">
      <router-link to="/" class="pt-1 pr-3 my-store">MyStore</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav pl-5">
          <router-link to="/products" class="pt-1 pr-3 ">
            Productos
          </router-link>
          <router-link to="/newproduct" class="pt-1 pr-3 ">
            Nuevo Producto
          </router-link>
          <router-link to="/shoppingcart" >
            <img src="@/assets/favicon.png" alt="" srcset="" />
          </router-link>
        </div>
      </div>
    </nav>
    <br />
    <transition name="my-transition" mode="out-in">
      <router-view></router-view>
    </transition>
    <hr>

  </div>
</template>

<script>

export default {
}
</script>

<style >
nav {
  font-family: 'Montserrat', sans-serif;
}

nav .my-store {
  color: rgba(0, 174, 180, 0.986);
  font-size: 35px;
  text-decoration: none;
}
nav a {
  color: rgb(0, 174, 180, 0.98);
}
nav a:hover {
  text-decoration: none;
  color: rgba(0, 174, 180, 0.199);
  transition: all 0.4s ease;
}

img{
  width: 1.5rem;
  padding-top: 0.3em;
  transition: all 0.4s ease;
}
.my-transition-enter-active, .my-transition-leave-active {
  transition: opacity .3s;
}
.my.transition-enter, .my-transition-leave-to{
  opacity: 0;
}
</style>

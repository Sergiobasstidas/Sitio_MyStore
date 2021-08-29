<template>
  <div class="div-form py-3 ">
    <form class="form" @submit.prevent="handleFormSubmit">
      <div class="form-group">
        <label for="">Nombre Producto</label>
        <input class="form-control" id="exampleInputEmail1" type="text" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="">Precio del producto</label>
        <input  class="form-control" type="number" v-model.number="form.price" required />
      </div>

      <label for="">Categoria</label>
      <select  class="form-control" v-model="form.category" required>
        <option value="Food">Comida</option>
        <option value="technology">Tecnología</option>
        <option value="Pets">Mascotas</option>
        <option value="Other">Otro</option>
      </select>

      <label class="mt-3">Color</label>
      <input  class="form-control" type="color" v-model="form.color" required />

      <label class="mt-3 mb-0">Oferta</label>
      <input class="ml-1" type="checkbox" v-model="form.offer" />
      <input  class="form-control"
        type="number"
        min="1"
        max="100"
        v-model="form.discount"
        v-if="form.offer"
        required
      />
       <hr>
      <button type="submit" class="btn btn-info btn-sm">Guardar</button>

    </form>
  </div>
</template>

<script>
export default {
  name: 'NewProduct',
  data: () => ({
    form: {
      name: '',
      price: null,
      category: '',
      offer: false,
      discount: null,
      color: ''
    }
  }),
  methods: {
    async handleFormSubmit() {
      await this.$store.dispatch('agregarProducto', this.form)
      this.$router.push('/products')
    }
  }
}
</script>

<style>
.div-form {
  background-color: rgb(0, 83, 83);
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
}
form {
  margin: 10px 800px 0px 30px;
}

</style>

<template>
  <q-page class="flex flex-center">
    {{ clientes }}
    <div v-for="cliente in clientes" v-bind:key="cliente.id">
      {{ cliente.nome }}
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import services from 'src/services'

export default defineComponent({
  name: 'IndexPage',
  data(){
    return {
      clientes: [],
      categorias: []
    }
  },
  created() {
    services.getAllClientes( (dados)=> this.clientes = dados )
    services.getAllCategorias( (dados)=> this.categorias = dados )

  }
})
</script>

<template>
  <q-page class="flex flex-center">
   <!--<a href="/#/clientes">Clientes</a>-->
   <q-btn to="newCliente">Novo Cliente</q-btn>
   <q-btn to="clientes">Clientes</q-btn>
    <!-- trocado por um q-btn
      <router-link to="clientes">Clientes</router-link>
    -->
    {{ clientes }}
    {{ categorias }}
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import services from 'src/services'
import ClientesStore from 'src/stores/ClientesStore'

export default defineComponent({
  name: 'IndexPage',
  data(){
    return {
      clientes: Array,
      categorias: Array
    }
  },
  created() {
    ClientesStore.clientes
    services.getAllClientes( (dados)=> this.clientes = dados )
    services.getAllCategorias( (dados)=> this.categorias = dados )

  }
})
</script>

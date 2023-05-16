
<template>
  <q-card class="q-ma-md q-pr-md q-pl-md q-pb-lg">
    <h3>Novo Cliente</h3>
    <q-form>
      <q-input v-model="nome" label="Nome" />
      <q-input v-model="email" label="Email" />
      <q-input v-model="fone1" label="Fone" />
      <q-input v-model="fone2" label="Fone" />
      <q-input v-model="categoria" label="Categoria" />
      <q-input v-model="cpf" label="CPF" />
      <q-btn @click="salvar">Salvar</q-btn>
      <q-btn class="bg-negative">Cancelar</q-btn>


    </q-form>
  </q-card>
</template>

<script>
import services from 'src/services'
export default {
  name: "NewCliente",
  data() {
    return {
      nome: "",
      email: "",
      fone1: "",
      fone2: "",
      categoria: "",
      cpf: ""
    }
  },
  methods: {
    salvar() {
      let afones = []
      if (this.fone1 != '') {
        afones.push(this.fone1)
      }
      if (this.fone2 != '') {
        afones.push(this.fone2)
      }

      let cli = {
        nome: this.nome,
        email: this.email,
        fones: afones,
        categoria: this.categoria,
        cpf: this.cpf
     }
     console.log(cli)
     services.saveCliente(cli)
     this.$router.push('/')
    }
  }
}
</script>

<style>

</style>

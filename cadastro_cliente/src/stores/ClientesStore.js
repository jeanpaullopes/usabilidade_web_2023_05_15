
import { defineStore } from 'pinia';

const useCounterStore = defineStore('counter', {
  state: () => ({
    clientes: new Map(),
    categorias: []
  }),
  getters: {
    //doubleCount: (state) => state.counter * 2,
  },
  actions: {
    getClientes() {
      console.log(this.clientes.size)
      console.log(this.clientes.values())
      return Array.from(this.clientes.values())
    },
    addCliente( cliente ){
      this.clientes.set(cliente.id, cliente)
    },
    addClientes( arrClientes) {
      arrClientes.forEach( cliente => {
        console.log(cliente)
        this.clientes.set(cliente.id, cliente)
       }
        )
    },
    addCategorias(arrCategorias) {
      this.categorias = arrCategorias
    }
  },
});

const ClientesStore = useCounterStore()
export default ClientesStore;

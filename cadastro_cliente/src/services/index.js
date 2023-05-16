
import api from './apiClientes.js'
import ClientesStore from 'src/stores/ClientesStore.js'
const services = {
  getAllClientes( callback ) {
    if (ClientesStore.clientes.size == 0) {
      api.get('clientes').then((response)=>{
        ClientesStore.addClientes(response.data)
        if (callback != undefined) {
          console.log(ClientesStore.getClientes())
          callback(ClientesStore.getClientes())
        }
      }).catch((err)=>{
        alert(err.message)
      })
    } else {
      if (callback != undefined) {
        callback(ClientesStore.getClientes())
      }
    }
  },
  saveCliente(cliente) {
    api.post('clientes', cliente).then((reponse)=>{
      ClientesStore.addCliente(reponse.data)
    }).catch((err)=>{
      alert(err.message)
    })
  },
  getAllCategorias( callback ) {
    if (ClientesStore.categorias.length == 0) {
      api.get('categorias').then((response)=>{
        ClientesStore.addCategorias(response.data)
        if (callback != undefined) {
          callback(ClientesStore.categorias)
        }
      }).catch((err)=>{
        alert(err.message)
      })
    } else {
      if (callback != undefined) {
        callback(ClientesStore.categorias)
      }
    }
  }
}
export default services

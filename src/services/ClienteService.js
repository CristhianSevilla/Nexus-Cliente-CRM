import api from "../api/axios"

const path = "/clientes/"

export default {
    obtenerClientes() {
        return api.get(path)
    },
    agregarCliente(data) {
       return  api.post(path, data)
    },
    obtenerCliente(id){
        return api.get(path + id)
    },
    actualizarCliente(id, data){
        return api.patch( path + id, data)
    },
    cambiarEstadoCliente(id, data){
        return api.patch(path + id, data)
    }
}
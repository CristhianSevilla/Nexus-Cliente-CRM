import api from "../api/axios"

export default {
    obtenerClientes() {
        return api.get('/clientes')
    },
    agregarCliente(data) {
       return  api.post("/clientes", data)
    }
}
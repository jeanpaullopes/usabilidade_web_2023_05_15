
import axios from "axios";

const api = axios.create(
    {
        baseURL: "http://localhost:3000/", //já tem parte do endereço cadastrado
        withCredentials: false, //tem credenciais pra logar?
        headers: {
          accept: "application/json", //manda um json
          "Content-type": "application/json", //recebe um json
        },
      }
)

export default api

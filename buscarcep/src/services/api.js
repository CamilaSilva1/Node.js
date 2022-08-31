// Criado por Camila Silva
// Desde 29/08/2022
// Este script é responsavel por gerenciar a api externa utilizada no projeto

import axios from "axios";

const api = axios.create({

    baseURL: "https://viacep.com.br/ws/"

});

export default api;
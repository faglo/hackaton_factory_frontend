import axios from 'axios'

const API = axios.create({
  baseURL: 'https://hackapi.digital-info-tech.ru'
})

export default API

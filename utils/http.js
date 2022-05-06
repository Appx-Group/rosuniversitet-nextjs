import axios from 'axios'
import { domain } from './urls'

const baseAxios = axios.create({
    baseURL: `${domain}/api/`,
})

export default baseAxios

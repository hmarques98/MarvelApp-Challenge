import { BASE_URL, API_KEY, HASH_KEY, TS_KEY } from '@env'
import axios from 'axios'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
})

instance.defaults.params = {
  apikey: API_KEY,
  ts: TS_KEY,
  hash: HASH_KEY,
}

export default instance

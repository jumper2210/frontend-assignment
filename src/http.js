import axios from 'axios'

const url = 'http://localhost:6010'

// Because we love DRY pattern. :)
export default axios.create({
  baseURL: `${url}`,
  headers: {
    'Content-type': 'application/json',
  },
})

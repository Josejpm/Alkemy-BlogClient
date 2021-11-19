import axios from 'axios'

const axiosClient = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts'

})

export default axiosClient
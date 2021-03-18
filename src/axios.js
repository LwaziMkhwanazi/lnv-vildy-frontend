import axios from "axios"

    const axiosIntance = axios.create({
        baseURL:'https://jsonplaceholder.typicode.com'
    })

    export default axiosIntance;
import axios from "axios"
const localToken = localStorage.getItem('token')
console.log(localToken)
    const axiosIntance = axios.create({
        baseURL:'http://localhost:8080',
        headers:{
            Authorization:`'x-auth-token'${localToken}`
        }
    })


export default axiosIntance
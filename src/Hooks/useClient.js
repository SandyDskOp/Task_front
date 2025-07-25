import axios from "axios"
import Cookies from "js-cookie"

function useClient(token_name,role){
    const client = axios.create({
        baseURL:"http://localhost:8000/api/v1"
    })

    const authClient = axios.create({
        baseURL:"http://localhost:8000/api/v1"
    })

    client.interceptors.request.use(()=>{},(err)=>{
        return Promise.reject(err);
    })

    authClient.interceptors.request.use((config)=>{
        let token = Cookies.get(token_name)
        if(!token){
            return Promise.reject(err);
        }
        config.headers.Authorization = `Bearer ${token}`
    },(err)=>{
        return Promise.reject(err);
    })

    client.interceptors.response.use(()=>{},()=>{})

    authClient.interceptors.response.use(()=>{},()=>{})

    return [client,authClient]
}

export default useClient;
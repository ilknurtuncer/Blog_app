import axios from "axios"



const useAxios = ()=>{
const token = "16e1828d99f7d1d81e481902da6e70a004284c62"
const axiosPublic = axios.create({
    baseURL:"http://32304.fullstack.clarusway.com/"
})

const axiosWithToken = axios.create({
    baseURL:"http://32304.fullstack.clarusway.com/",
    headers:{Authorization: `Token ${token}`}
})
return {axiosPublic, axiosWithToken}
}
export default useAxios
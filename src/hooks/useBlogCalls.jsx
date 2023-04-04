import { useDispatch } from "react-redux";
import {
    fetchStart,
    getSuccess,
    fetchFail
} from "../features/blogSlice"
import useAxios from "./useAxios";

const useBlogCallS = ()=>{
    const dispatch = useDispatch()

    const {axiosWithToken} = useAxios()

    //Blogs
    const getBlogData = async(url)=>{
        dispatch(fetchStart())
        try {
            const {data} = await axiosWithToken(
                `api/${url}/`
            )
            dispatch(getSuccess({data, url}))
        } catch (error) {
            dispatch(fetchFail())
        }
    }

    return {getBlogData}
}
export default useBlogCallS
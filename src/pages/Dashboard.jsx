import React from "react";

import BlogCard from "../components/blog/BlogCard"


import { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";

const Dashboard = () => {
  
  const{getBlogData}= useBlogCalls()
//  const {blogs}=useSelector()
  // const getBlogListData = async()=>{
  //   dispatch(fetchStart)
  //   const BASE_URL="http://32304.fullstack.clarusway.com/api/blogs/"
  //   try {
  //     const {data}= await axios(`${BASE_URL}`)
  //     dispatch(getSuccess(data))   
      
      
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    getBlogData("blogs")
  }, [])
  return (
    <>
      <BlogCard   />
    </>
  );
};
export default Dashboard
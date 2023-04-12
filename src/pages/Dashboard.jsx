import React from "react";

import BlogCard from "../components/blog/BlogCard"


import { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
// import {  useSelector } from "react-redux";

const Dashboard = () => {

  
  const{getBlogData}= useBlogCalls();
  // const { blogs } = useSelector((state) => state.blog);


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
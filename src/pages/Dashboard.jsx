import React from "react";

import BlogCard from "../components/blog/BlogCard"


import { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  
  const{getBlogData}= useBlogCalls();
  const { blogs } = useSelector((state) => state.blogs);


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
import PostItem from "./PostItem.js";
import posts from "./posts.json"
import React from "react";

const PostList = () => {

    return (
        <div style={{"color": "white"}}>
            {posts.map((value,index) => {
                return <li key={index}>
                    <PostItem posts={value}/>
                </li>
            })}
        </div>
    )
};

export default PostList;
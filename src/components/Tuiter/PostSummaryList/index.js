import PostSummaryItem from "./PostSummaryItem.js";
import React from "react";
import post from "./post.json"



const PostSummaryList = () => {
    return (
        <div style={{"color": "white"}}>
                {post.map((value,index) => {
                    return <li key={index}>
                        <PostSummaryItem post={value}/>
                    </li>
                })}
        </div>
    )
};

export default PostSummaryList;
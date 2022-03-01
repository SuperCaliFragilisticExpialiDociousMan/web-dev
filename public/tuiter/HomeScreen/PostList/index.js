import { PostItem } from "./PostItem.js";
import posts from "./posts.js"


const PostList = () => {
    var html="<div style='color: white;'>"  ;
    for (let i=0; i<posts.length; i++) {
        html=html+PostItem(posts[i]);
    }
    html=html+"</div>" ;
    return html ;

}

export default PostList
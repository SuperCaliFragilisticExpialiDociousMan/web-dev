import { PostSummaryItem } from "./PostSummaryItem.js";
import post from "./post.js"


const PostSummaryList = () => {
    var html="<div style='color: white;'>"  ;
    for (let i=0; i<post.length; i++) {
        html=html+PostSummaryItem(post[i]);
    }
    html=html+"</div>" ;
    return html ;

}

export default PostSummaryList;
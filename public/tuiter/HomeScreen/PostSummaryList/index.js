import { PostSummaryItem } from "./PostSummaryItem.js";
import post from "./post.js"


const PostSummaryList = () => {
    var html="<div style='color: white; background-color: #1e2125; border-style: solid; border-color: black; border-width: 1px;'>"  ;
    for (let i=0; i<post.length; i++) {
        html=html+PostSummaryItem(post[i]);
    }
    html=html+"</div>" ;
    return html ;

}

export default PostSummaryList;
import { WhoToFollowListItem } from "./WhoToFollowListItem.js";
import who from "./who.js"





const WhoToFollowList = () => {
    var html="<ul class=\"list-group\"><li style=\"list-style: none; color: white;\"><div><strong>Who to follow</strong></div></li>"
    for (let i=0; i<who.length; i++) {

        html=html+"<li style='list-style: none; color: white; background-color: #2c3034; padding: 10px; border-width: 1px; border-style: solid; border-color: #1e2125'>" ;
        html=html+WhoToFollowListItem(who[i]);
        html=html+"</li>" ;

    }
    return html ;

}



export default WhoToFollowList;
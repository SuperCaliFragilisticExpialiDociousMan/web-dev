

export function WhoToFollowListItem (who) {
    var avatarIcon=who['avatarIcon'] ;
    var userName=who['userName'] ;
    var handle=who['handle'] ;
    var html="<div class='container'><div class='row'><div class='col-2'><img src="
        +avatarIcon
        +" height='40px' width='40px' style='border-radius: 50px;'/></div><div class='col-8' style='color: white'><strong>"
        +userName
        +"</strong><i class='fa-solid fa-circle-check'></i><br/>"
        +handle
        +"</div><div class='col-2 my-auto'><button style='border-radius: 15px;  background-color: white; color: black;'>Follow</button></div></div></div>"
    return html;

}





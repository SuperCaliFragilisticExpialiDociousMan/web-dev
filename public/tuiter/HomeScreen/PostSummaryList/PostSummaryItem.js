export function PostSummaryItem (post) {
    var topic=post['topic'] ;
    var userName=post['userName'] ;
    var time=post['time'] ;
    var image=post['image'] ;
    var title=post['title'] ;



    var html="<div class='container position-relative'style=' height: 100%; border-color: black; border-style: solid; border-width: 1px; '><div class='row'><div class='col-10'><span style='float: left; '><a style='font-size: 13px; color: grey; text-decoration: None;' class='pt-3 pb-3 ps-3 pe-3'>"
        +topic
        +"</a><br/><a style='font-size: 16px; color: white; text-decoration: None; ' class='pt-3 pb-3 ps-3 pe-3'><strong>"
        +userName
        +"</strong></a><i class='fa-solid fa-circle-check'></i><text style='font-size: 13px; color: gray'>- "
        +time
        +"</text><br/><a style='font-size: 16px; color: white; text-decoration: none;' class='pt-3 pb-3 ps-3 pe-3 text-break'><strong>"
        +title
        +"</strong></a><br/><text style='font-size: 13px; color: rgb(110,118,125)' class='pt-3 pb-3 ps-3 pe-3'>123K Tweets</text><br/></span></div><div class='col-2'><span style=' right: 6px; background: black;  top: 8px; '><img src="
        +image
        +" class='pt-2' style='width: 100%;'/></span></div></div></div>"



    return html;
}

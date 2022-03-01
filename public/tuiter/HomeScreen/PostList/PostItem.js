export function PostItem (post) {
    var topic1_1=post['topic1_1'] ;
    var topic1_2=post['topic1_2'] ;
    var topic1_link=post['topic1_link'] ;
    var userName=post['userName'] ;
    var time=post['time'] ;
    var head_portrait=post['head_portrait'] ;
    var image=post['image'] ;
    var title=post['title'] ;
    var text = post['text'] ;
    var reply = post['reply'] ;
    var retweet = post['retweet'] ;
    var like = post['Like'] ;
    var topic2=post['topic2'] ;
    var topic2_link=post['topic2_link'] ;
    var userName2=post['userName2'] ;
    var time2=post['time2'] ;
    var head_portrait2=post['head_portrait2'] ;
    var image2=post['image2'] ;
    var reply2 = post['reply2'] ;
    var retweet2 = post['retweet2'] ;
    var like2 = post['Like2'] ;



    var html="<div style=\"padding-top: 12px; padding-left: 16px; \">\n" +
        "    <img src="
        +head_portrait
        +" height=\"48px\" width=\"48px\" style=\"border-radius: 50%; float: left; \"/>\n" +
        "    <div style=\"padding-left: 60px; padding-right: 16px\">\n" +
        "        <div style=\"width: 506px\">\n" +
        "            <text style=\"color: white;  font-size: 15px; \"><strong>"
        +userName
        +"</strong></text>\n"
        + "<i class=\"fa-light fa-octagon-check\" style='color: white;'></i>" +
        "            <text style=\"color: #5c636a; font-size: 5px; \">"
        +time
        +"</text>\n" +
        "            <br/>\n" +
        "            <text style=\"color: white; font-size: 15px;\">"
        +topic1_1
        +"<a style='color: dodgerblue;'>"
        +topic1_link
        +"</a>"
        +topic1_2
        +"</text>\n" +
        "        </div>\n" +
        "        <div\n" +
        "            style=\"position: relative; top: 12px; width: 504px; border-radius: 15px; border-style: solid; border-color: #2c3034; border-width: 1px;\">\n" +
        "            <div style=\"width: 504px;\">\n" +
        "                <img src="
        +image
        +" height=\"264px\" width=\"500px\"\n" +
        "                     style=\"border-top-left-radius: 15px; border-top-right-radius: 15px;\"/>\n" +
        "            </div>\n" +
        "            <div style=\"width: 504px; border-style: solid; border-color: #2c3034; border-width: 1px; border-bottom: none; border-left: none; border-right: none;  \">\n" +
        "                <div style=\"padding: 12px;\">\n" +
        "                    <text style=\"color: white; font-size: 15px;\"><strong>"
        +title
        +"</strong>\n" +
        "                    </text>\n" +
        "                    <br/>\n" +
        "                    <text style=\"color: lightgray; font-size: 15px; \">"
        +text
        +"</text>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div style=\"position: relative; top: 13px;\">\n" +
        "  <span>     <a class=\"fa-regular fa-comment\"\n" +
        "               style=\"font-size:20px; text-decoration: None; color:lightgray; padding-left: 10px; \"\n" +
        "               href=\"#\">"
        +"</a>\n" + "<span style='padding-left: 10px; padding-right: 50px;'>" +
        reply + "</span>" +
        "   </span>   <a class=\"fa-solid fa-retweet\"\n" +
        "               style=\"font-size:20px; text-decoration: None; color:lightgray; padding-left: 10px; \"\n" +
        "               href=\"#\">"
        +"</a>\n" + "<span style='padding-left: 10px; padding-right: 50px;'>" +
        retweet + "</span>" +
        "  </span>     <a class=\"fa fa-heart\"\n" +
        "               style=\"font-size:20px; text-decoration: None; color:lightgray; padding-left: 10px; \"\n" +
        "               href=\"#\">"
        +"</a>\n" + "<span style='padding-left: 10px; padding-right: 50px;'>" +
        like + "</span>" +
        "  </span>     <a class=\"fa-solid fa-arrow-up-from-bracket\"\n" +
        "               style=\"font-size:20px; text-decoration: None; color: lightgray; padding-left: 10px; \"\n" +
        "               href=\"#\"></a>\n" +
        "        </div>\n" +
        "        e\n" +
        "    </div>\n" +
        "</div>"+


        "<div style=\"padding-top: 12px; padding-left: 16px; \">\n" +
        "    <img src="
        +head_portrait2
        +" height=\"48px\" width=\"48px\" style=\"border-radius: 50%; float: left; \"/>\n" +
        "    <div style=\"padding-left: 60px; padding-right: 16px\">\n" +
        "        <div style=\"width: 506px\">\n" +
        "            <text style=\"color: white;  font-size: 15px; \"><strong>"
        +userName2
        +"</strong></text>\n" +
        "            <text style=\"color: #5c636a; font-size: 5px; \">"
        +time2
        +"</text>\n" +
        "            <br/>\n" +
        "            <text style=\"color: white; font-size: 15px;\">"
        +topic2
        +"<a style='color: dodgerblue;'>"
        +topic2_link
        +"</a>"
        +"</text>\n" +
        "        </div>\n" +
        "        <div\n" +
        "            style=\"position: relative; top: 12px; width: 504px; border-radius: 15px; border-color:lightgray; border-width: thin; border-style: solid;\">\n" +
        "            <div style=\"width: 504px;\">\n" +
        "                <img src="
        +image2
        +" height=\"264px\" width=\"504px\"\n" +
        "                     style=\"border-top-left-radius: 15px; border-top-right-radius: 15px;\"/>\n" +
        "            </div>\n" +

        "        </div>\n" +
        "        <div style=\"position: relative; top: 13px;\">\n" +
        "  <span>     <a class=\"fa-regular fa-comment\"\n" +
        "               style=\"font-size:20px; text-decoration: None; color:lightgray; padding-left: 10px; \"\n" +
        "               href=\"#\">"
        +"</a>\n" + "<span style='padding-left: 10px; padding-right: 50px;'>" +
        reply2 + "</span>" +
        "   </span>   <a class=\"fa-solid fa-retweet\"\n" +
        "               style=\"font-size:20px; text-decoration: None; color:lightgray; padding-left: 10px; \"\n" +
        "               href=\"#\">"
        +"</a>\n" + "<span style='padding-left: 10px; padding-right: 50px;'>" +
        retweet2 + "</span>" +
        "  </span>     <a class=\"fa fa-heart\"\n" +
        "               style=\"font-size:20px; text-decoration: None; color:lightgray; padding-left: 10px; \"\n" +
        "               href=\"#\">"
        +"</a>\n" + "<span style='padding-left: 10px; padding-right: 50px;'>" +
        like2 + "</span>" +
        "  </span>     <a class=\"fa-solid fa-arrow-up-from-bracket\"\n" +
        "               style=\"font-size:20px; text-decoration: None; color: lightgray; padding-left: 10px; \"\n" +
        "               href=\"#\"></a>\n" +
        "        </div>\n" +
        "        e\n" +
        "    </div>\n" +
        "</div>"




    return html;
}

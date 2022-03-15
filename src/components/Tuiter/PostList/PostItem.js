const PostItem = ({posts})=> {

    return (
        <>
        <div style={{"padding-top": "12p", "padding-left": "16px"}}>
            <img src={posts.head_portrait} height="48px" width="48px" style={{"border-radius": "50%", "float": "left"}}/>
            <div style={{"padding-left": "60px", "padding-right": "16px"}}>
                <div style={{"width": "506px"}}>
                    <text style={{"color": "white",  "font-size": "15px"}}><strong>{posts.userName}</strong></text>
        <i className="fa-light fa-octagon-check" style={{"color": "white"}}> </i>
                    <text style={{"color": "#5c636a", "font-size": "12px"}}>  {posts.time} </text>
                    <br/>
                    <text style={{"color": "white", "font-size": "15px"}}>{posts.topic1_1}
                        <a style={{"color": "dodgerblue"}}>{posts.topic1_link}</a>{posts.topic1_2}</text>
                </div>
                <div
                    style={{"position": "relative", "top": "12px", "width": "504px", "border-radius": "15px", "border-style": "solid", "border-color": "#2c3034", "border-width": "1px"}}>
                    <div style={{"width": "504px"}}>
                        <img src={posts.image} height="264px" width="500px"
                             style={{"border-top-left-radius": "15px", "border-top-right-radius": "15px"}}/>
                    </div>
                    <div style={{"width": "504px", "border-style": "solid", "border-color": "#2c3034", "border-width": "1px", "border-bottom": "none", "border-left": "none", "border-right": "none"}}>
                        <div style={{"padding": "12px"}}>
                            <text style={{"color": "white", "font-size": "15px"}}><strong>{posts.title}</strong>
                            </text>
                            <br/>
                            <text style={{"color": "lightgray", "font-size": "15px"}}>{posts.text}</text>
                        </div>
                    </div>
                </div>
                <div style={{"position": "relative", "top": "13px"}}>
          <span>     <a className="fa-regular fa-comment"
                       style={{"font-size":"20px", "text-decoration": "None", "color":"lightgray", "padding-left": "10px"}}
                       href="#">
        </a> <span style={{"padding-left": "10px", "padding-right": "60px"}}>
        {posts.reply} </span>
           </span>
                    <a className="fa-solid fa-retweet"
                       style={{"font-size":"20px", "text-decoration": "None", "color":"lightgray", "padding-left": "10px"}}
                       href="#">
                    </a> <span style={{"padding-left": "10px", "padding-right": "60px"}}>{posts.retweet}</span>

                <a className="fa fa-heart"
                   style={{"font-size":"20px", "text-decoration": "None", "color":"lightgray", "padding-left": "10px"}}
                   href="#">
        </a> <span style={{"padding-left": "10px", "padding-right": "60px"}}> {posts.Like}  </span>
               <a className="fa-solid fa-arrow-up-from-bracket" style={{"font-size":"20px", "text-decoration": "None", "color":"lightgray", "padding-left": "10px"}}
                  href="#"> </a>


                </div>
            </div>
        </div>


        <div style={{"padding-top": "12px", "padding-left": "16px"}}>
            <img src={posts.head_portrait2} height="48px" width="48px" style={{"border-radius": "50%", "float": "left"}}/>
            <div style={{"padding-left": "60px", "padding-right": "16px"}}>
                <div style={{"width": "506px"}}>
        <text style={{"color": "white",  "font-size": "15px"}}><strong>
            {posts.userName2}
        </strong></text>
        <text style={{"color": "#5c636a", "font-size": "12px"}}>
            {posts.time2}
        </text>
        <br/>
        <text style={{"color": "white", "font-size": "15px"}}>
            {posts.topic2}
        <a style={{"color": "dodgerblue"}}>
            {posts.topic2_link}
        </a>
        </text>
        </div>
        <div
        style={{"position": "relative", "top": "12px", "width": "504px", "border-radius": "15px", "border-color":"lightgray", "border-width": "thin", "border-style": "solid"}}>
        <div style={{"width": "504px"}}>
        <img src={posts.image2} height="264px" width="504px"
        style={{"border-top-left-radius": "15px", "border-top-right-radius": "15px"}}/>
        </div>

        </div>
        <div style={{"position": "relative", "top": "13px"}}>
        <span>     <a className="fa-regular fa-comment"
                      style={{"font-size":"20px", "text-decoration": "None", "color":"lightgray", "padding-left": "10px"}}
                      href="#">
        </a> <span style={{"padding-left": "10px", "padding-right": "60px"}}>
        {posts.reply} </span>
           </span>
            <a className="fa-solid fa-retweet"
               style={{"font-size":"20px", "text-decoration": "None", "color":"lightgray", "padding-left": "10px"}}
               href="#">
            </a> <span style={{"padding-left": "10px", "padding-right": "60px"}}>{posts.retweet}</span>

            <a className="fa fa-heart"
               style={{"font-size":"20px", "text-decoration": "None", "color":"lightgray", "padding-left": "10px"}}
               href="#">
            </a> <span style={{"padding-left": "10px", "padding-right": "60px"}}> {posts.Like}  </span>
            <a className="fa-solid fa-arrow-up-from-bracket" style={{"font-size":"20px", "text-decoration": "None", "color":"lightgray", "padding-left": "10px"}}
               href="#"> </a>
        </div>
        </div>
        </div>

        </>


);
}

export default PostItem;


const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../../tuiter/ReactJS.jpg"
        }
    }) => {
    return (
        <div className='container position-relative' style={{"border-top-style": "none", "height": "100%"}}>
            <div className='row'>
                <div className='col-10'><span style={{"float": "left"}}><a
                    style={{"font-size": "13px", "color": "grey", "text-decoration": "None"}} className='pt-3 pb-3 ps-3 pe-3'>
        {post.topic}
        "</a><br/><a style={{"font-size": "16px", "color": "white", "text-decoration": "None"}}
                      className='pt-3 pb-3 ps-3 pe-3'><strong>
                    {post.userName}
        "</strong></a><i className='fa-solid fa-circle-check'> </i><text style={{"font-size": "13px", "color": "gray"}}>-
                    {post.time}
        </text><br/><a style={{"font-size": "16px", "color": "white", "text-decoration": "none"}}
                         className='pt-3 pb-3 ps-3 pe-3 text-break'><strong>
        {post.title}
        </strong></a><br/><text style={{"font-size": "13px", "color": "rgb(110,118,125)"}} className='pt-3 pb-3 ps-3 pe-3'>123K Tweets</text><br/></span>
                </div>
                <div className='col-2'><span style={{"right": "6px", "background": "black",  "top": "8px"}}><img src={post.image}
         className='pt-2' style={{"border-radius": "15px", "width": "100%"}}/></span></div>
            </div>
        </div>
    ) ;
}

export default PostSummaryItem ;
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";
import {deleteTuit} from "../actions/tuits-actions";

const TuitListItem = ({tuit={
    "_id": "123", "topic": "Web Development", "postedBy": {"username": "ReactJS"}, "liked": true, "verified": false, "handle": "ReactJS", "time": "2h", "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs", "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "attachments": {"video": "unKvMC3Y1kI"}, "logo_image": "../../../../tuiter/countdow.jpg", "avatar_image": "../../../../tuiter/Elon_Musk.jpg", "comments": 123, "retuits": 234, "likes": 345}})=> {
    const dispatch=useDispatch();


    return (
        <>

            <div style={{"padding-top": "12p", "padding-left": "16px"}}>
                <i className="fas fa-remove float-end" style={{"padding-right":"10px"}} onClick={() => deleteTuit(dispatch, tuit)}></i>
                <img src={tuit.avatar_image} height="48px" width="48px" style={{"border-radius": "50%", "float": "left"}}/>


                <div style={{"padding-left": "60px", "padding-right": "16px"}}>
                    <div style={{"width": "506px"}}>
                        <text style={{"color": "white",  "font-size": "15px"}}><strong>{tuit.handle}</strong></text>
                        <i className="fa-light fa-octagon-check" style={{"color": "white"}}> </i>
                        <text style={{"color": "#5c636a", "font-size": "12px"}}>  {tuit.time} </text>
                        <br/>
                        <text style={{"color": "white", "font-size": "15px"}}>{tuit.topic}
                            </text>
                    </div>
                    <div
                        style={{"position": "relative", "top": "12px", "width": "504px", "border-radius": "15px", "border-style": "solid", "border-color": "#2c3034", "border-width": "1px"}}>
                        <div style={{"width": "504px"}}>
                            <img src={tuit.logo_image} height="264px" width="500px"
                                 style={{"border-top-left-radius": "15px", "border-top-right-radius": "15px"}}/>
                        </div>
                        <div style={{"width": "504px", "border-style": "solid", "border-color": "#2c3034", "border-width": "1px", "border-bottom": "none", "border-left": "none", "border-right": "none"}}>
                            <div style={{"padding": "12px"}}>
                                <text style={{"color": "white", "font-size": "15px"}}><strong>{tuit.title}</strong>
                                </text>
                                <br/>
                                <text style={{"color": "lightgray", "font-size": "15px"}}>{tuit.tuit}</text>
                            </div>
                        </div>
                    </div>
                    <div style={{"position": "relative", "top": "13px"}}>
          <span>     <a className="fa fa-comment"
                        style={{"font-size":"20px", "text-decoration": "None", "color":"lightgray", "padding-left": "10px"}}
                        href="#">
        </a> <span style={{"padding-left": "10px", "padding-right": "60px"}}>
        {tuit.comments} </span>
           </span>
                        <a className="fa fa-retweet"
                           style={{"font-size":"20px", "text-decoration": "None", "color":"lightgray", "padding-left": "10px"}}
                           href="#">
                        </a> <span style={{"padding-left": "10px", "padding-right": "60px"}}>{tuit.retuits}</span>

                        <i onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            likes: tuit.likes + 1
                        })} className="far fa-thumbs-up ms-2"></i>
                        <span style={{"padding-left": "10px", "padding-right": "60px"}}>
                             {tuit.likes}
                        </span>
                        <a className="fa-solid fa-arrow-up-from-bracket" style={{"font-size":"20px", "text-decoration": "None", "color":"lightgray", "padding-left": "10px"}}
                           href="#"> </a>


                    </div>
                </div>
            </div>
            <br/> <br/> <br/>


        </>


    );
}

export default TuitListItem;

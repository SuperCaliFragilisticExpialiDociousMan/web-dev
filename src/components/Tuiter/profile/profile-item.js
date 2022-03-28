import React from "react";
import {Link} from "react-router-dom";

const ProfListItem = ({prof={
        "firstName": "Martin", "lastName": "Shi", "handle": "Code Elite",
        "profilePicture": "../../../../tuiter/martin.jpg",     "bannerPicture": "../../../../tuiter/interstellar.jpg",
        "bio": "Student, Data Scientist, Algorithm Engineer",
        "website": "youtube.com/webdevtv",
        "location": "Boston, MA",    "dateOfBirth": "3/1998",    "dateJoined": "12/2020",
        "followingCount": 312,    "followersCount": 180
}})=> {

    return (
        <div>
            <div style={{"height":"50px"}}>
                <i className="fa-solid fa-arrow-left"> </i>
                <text style={{"color": "white", "font-size": "15px", "padding-left":"10px", "padding-right":"5px"}}><strong>{prof.lastName}</strong></text>
                <text style={{"color": "white", "font-size": "15px"}}><strong>{prof.firstName}</strong></text>
                <br/>
                <text style={{"color": "grey", "font-size": "15px", "padding-left":"25px"}}>1,725 tweets</text>
            </div>
            <div style={{"height":"200px"}}>
                <img src={prof.bannerPicture}  height="300px" width="100%"/>
            </div>

            <div style={{"padding-top": "40px", "padding-left": "16px", "position":"relative"}}>
                <img src={prof.profilePicture} height="100px" width="100px" style={{"border-radius": "50%", "float": "left"}}/>
                <Link to="/tuiter/editprofile" id="editprofile" style={{"background-color": "#1e2125", "color": "white"}}>
                    <div style={{"bottom":"60px", "right":"20px", "position":"absolute"}}>
                        <button onClick="myFunction()" style={{"color":"white", "background-color":"black", "border-radius": "30%"}}>Edit profile</button>
                    </div>
                </Link >
                <div>
                    <br/> <br/> <br/> <br/> <br/>
                    <div style={{"width": "506px"}}>
                        <text style={{"color": "white", "font-size": "15px"}}><strong>{prof.lastName}</strong></text>
                        <text style={{"color": "white", "font-size": "15px"}}>  </text>
                        <text style={{"color": "white", "font-size": "15px"}}><strong>{prof.firstName}</strong></text>
                    </div>
                 </div>
            </div>

            <div>
                <div>
                    <text style={{"color": "grey",  "font-size": "15px"}}>@{prof.handle}</text>
                </div>
                    <div
                        style={{"position": "relative", "top": "12px", "width": "100%",  "border-width": "1px"}}>
                        <div style={{"width": "100%", "border-bottom": "none", "border-left": "none", "border-right": "none"}}>
                            <div style={{"padding": "12px"}}>
                                <text style={{"color": "white", "font-size": "15px"}}><strong>{prof.bio}</strong></text>
                                <br/>
                                <i className="fa-solid fa-location-dot"> </i>
                                <text style={{"color": "grey", "font-size": "15px", "padding-left":"10px", "padding-right":"20px"}}>{prof.location}</text>
                                <i className="fa-solid fa-cake-candles"> </i>
                                <text style={{"color": "grey", "font-size": "15px", "padding-left":"10px", "padding-right":"20px"}}>Born {prof.dateOfBirth}</text>
                                <i className="fa-solid fa-calculator"> </i>
                                <text style={{"color": "grey", "font-size": "15px", "padding-left":"10px", "padding-right":"20px"}}>Joined {prof.dateJoined}</text>

                            </div>
                        </div>
                    </div>
                    <div style={{"position": "relative", "top": "13px"}}>
                        <span style={{"padding-left": "10px", "padding-right": "60px"}}>
                            <strong style={{"color":"white"}}>{prof.followingCount}</strong> Followings
                        </span>
                        <span style={{"padding-left": "10px", "padding-right": "60px"}}>
                            <strong style={{"color":"white"}}>{prof.followersCount}</strong> Followers
                        </span>


                    </div>
            </div>
            <br/> <br/> <br/>


        </div>


    );
}

export default ProfListItem;

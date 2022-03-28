import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import {useSelector} from "react-redux";
import whoReducer from "../reducers/who-reducer";


const WhoToFollowList = () => {
    const who = useSelector((state) => state.whoReducer);
    return (
        <div>
            <ul className = "list-group"><li style={{"list-style": "none", "color": "white"}}>
                <div><strong>Who to follow</strong></div></li>
                {who.map((value,index) => {
                    return <li key={index} style={{"list-style": "none", "color": "white", "background-color": "#2c3034", "padding": "10px", "border-width": "1px", "border-style": "solid", "border-color": "#1e2125"}}>
                        <WhoToFollowListItem who={value}/>
                    </li>
                })}

            </ul>
        </div>
    )
};


export default WhoToFollowList;
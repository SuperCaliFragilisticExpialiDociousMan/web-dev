
import React from "react";
import ProfListItem from "./profile-item";



const ProfileList = () => {


    return (
        <ul className="ttr-tuits list-group">
            <ProfListItem  active="profile"/>
        </ul>
    );
}

export default ProfileList;
import React from "react";
import ProfileComponent from "./ProfileComponent";
import NavigationSidebar from "../NavigationSidebar";
import {Outlet} from "react-router-dom";
import WhoToFollowList from "../WhoToFollowList";


const ProfileScreen = () => {
    return(
        <div>

            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="profile"/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <div>
                        <h2>Profile</h2>
                    </div>
                    <div>
                        <ProfileComponent/>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>


        </div>

    );
};
export default ProfileScreen;


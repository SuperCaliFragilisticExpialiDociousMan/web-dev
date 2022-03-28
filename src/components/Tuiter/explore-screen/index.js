import React from "react";
import ExploreComponent from "../ExploreScreen/explorecomponent";
import NavigationSidebar from "../NavigationSidebar";
import WhatsHappening from "../home-screen/whats-happening";
import TuitList from "../tuit-list";
import WhoToFollowList from "../WhoToFollowList";


const HomeScreen = () => {
    return(
        <div>


            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <div>
                        <h2>Explore</h2>
                    </div>
                    <div>
                        <ExploreComponent/>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>


        </div>
    );
};
export default HomeScreen;
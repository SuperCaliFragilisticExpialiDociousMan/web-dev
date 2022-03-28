import React from "react";
import {Link} from "react-router-dom";



const NavigationSidebar = (
    {
        active = 'explore'

    })=> {
    return (
        <div>
            <div className="list-group" style={{"background-color": "#1e2125"}}>

                <a className="list-group-item disabled" href=" " style={{"background-color": "#1e2125"}}>
                    <i className="fab fa-twitter" style={{"color": "white"}}> </i>
                </a >

                <Link className={`list-group-item
        ${active === 'home' ? 'active' : ''}`}
                      to="/tuiter/home" id="ExploreScreen" style={{"background-color": "#1e2125", "color": "white"}}>
                    <i className="fa fa-home"> </i>
                    <div className="d-none d-xxl-inline d-xl-inline">Home</div>
                </Link >

                <Link className={`list-group-item
        ${active === 'explore' ? 'active' : ''}`}
                      to="/tuiter/explore" id="explore" style={{"background-color": "#1e2125", "color": "white"}} onclick="SomeJavaScriptCode">
                    <i className="fa fa-hashtag"> </i>
                    <div className="d-none d-xxl-inline d-xl-inline">Explore</div>
                </Link >

                <a className={`list-group-item
        ${active === 'notification' ? 'active' : ''}`}
                   href="#" id = "notifications" style={{"background-color": "#1e2125", "color": "white"}}>
                    <i className="fa fa-bell"> </i>
                    <div className="d-none d-xxl-inline d-xl-inline">Notification</div>
                </a >

                <a className={`list-group-item
        ${active === 'message' ? 'active' : ''}`}
                   href="#" id = "message" style={{"background-color": "#1e2125", "color": "white"}}>
                    <i className="fa fa-envelope"> </i>
                    <div className="d-none d-xxl-inline d-xl-inline">Message</div>
                </a >

                <a className={`list-group-item
        ${active === 'bookmarks' ? 'active' : ''}`}
                   href="#" id = "bookmarks" style={{"background-color": "#1e2125", "color": "white"}}>
                    <i className="fa fa-bookmark"> </i>
                    <span className="d-none d-xxl-inline d-xl-inline">Bookmarks</span>
                </a >

                <a className={`list-group-item
        ${active === 'lists' ? 'active' : ''}`}
                   href="#" id = "lists" style={{"background-color": "#1e2125", "color": "white"}}>
                    <i className="fa fa-list"> </i>
                    <span className="d-none d-xxl-inline d-xl-inline">Lists</span>
                </a >

                <Link className={`list-group-item
        ${active === 'profile' ? 'active' : ''}`}
                   to="/tuiter/profile" id="profile" style={{"background-color": "#1e2125", "color": "white"}}>
                    <i className="fa-solid fa-user"> </i>
                    <span className="d-none d-xxl-inline d-xl-inline">Profile</span>
                </Link >

                <a className={`list-group-item
        ${active === 'more' ? 'active' : ''}`}
                   href="#" id = "more" style={{"background-color": "#1e2125", "color": "white"}}>
                    <i className="fa fa-ellipsis-h"> </i>
                    <span className="d-none d-xxl-inline d-xl-inline">More</span>
                </a >

            </div>
            <div className="d-grid mt-2">
                <a href="#" className="btn btn-primary btn-block">
                    Tweet</a > </div>



        </div>

    );
}
export default NavigationSidebar;
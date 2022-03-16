import React from "react";

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

    <a className="list-group-item " href="../../HomeScreen/ExploreScreen/ExploreScreen.html" id="ExploreScreen" style={{"background-color": "#1e2125", "color": "white"}}>
    <i className="fa fa-home"> </i>
    <div className="d-none d-xxl-inline d-xl-inline">Home</div>
    </a >

    <a className="list-group-item " href= "../../ExploreScreen/ExploreScreen/explore.html" id="explore" style={{"background-color": "#1e2125", "color": "white"}}>
    <i className="fa fa-hashtag"> </i>
    <div className="d-none d-xxl-inline d-xl-inline">Explore</div>
    </a >

    <a className="list-group-item " href="#" id = "notifications" style={{"background-color": "#1e2125", "color": "white"}}>
    <i className="fa fa-bell"> </i>
    <div className="d-none d-xxl-inline d-xl-inline">Notification</div>
    </a >

    <a className="list-group-item " href="#" id = "message" style={{"background-color": "#1e2125", "color": "white"}}>
    <i className="fa fa-envelope"> </i>
    <div className="d-none d-xxl-inline d-xl-inline">Message</div>
    </a >

    <a className="list-group-item " href="#" id = "bookmarks" style={{"background-color": "#1e2125", "color": "white"}}>
    <i className="fa fa-bookmark"> </i>
    <span className="d-none d-xxl-inline d-xl-inline">Bookmarks</span>
    </a >

    <a className="list-group-item" href="#" id = "lists" style={{"background-color": "#1e2125", "color": "white"}}>
    <i className="fa fa-list"> </i>
    <span className="d-none d-xxl-inline d-xl-inline">Lists</span>
    </a >

    <a className="list-group-item" href="#" id = "more" style={{"background-color": "#1e2125", "color": "white"}}>
    <i className="fa fa-ellipsis-h"> </i>
    <span className="d-none d-xxl-inline d-xl-inline">More</span>
    </a >

    </div>
    <div className="d-grid mt-2">
    <a href="#" className="btn btn-primary btn-block">
    Tweet</a > </div>
    <script dangerouslySetInnerHTML={{ __html:
        `$(function () {
        var lI = $(".list-group-item");
        for (let j = 0; j < lI.length; j++) {lI[j].classList.remove("active");
    }
        var html = window.location.href;
        var webpage = html.split("/");
        var w = webpage[webpage.length-1].split('.')[0];
        console.log(w);
        document.getElementById(w).classList.add("active");

        $('.list-group-item').click(function (x) {$('.list-group-item').removeClass("active");
        var tar = $(x.target);
        tar.addClass("active");
    })
    })` }}
            />
        </div>
);
}
export default NavigationSidebar;
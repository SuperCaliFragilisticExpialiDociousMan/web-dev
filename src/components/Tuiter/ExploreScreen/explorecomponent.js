import PostSummaryList from "../PostSummaryList/index.js";
import React from "react";

const ExploreComponent = () => {
    return(
        <>
            <div className="wd-border-thin wd-border-color wd-border-solid"  >
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-11">
                                <i className="fa fa-magnifying-glass position-absolute my-auto" style={{"padding-left": "5px",  "padding-top": "15px", "color": "darkgrey"}}> </i>
                                <input type="text" className="wd-ip1" placeholder="   Search Twitter" style={{"width": "100%", "padding": "10px", "border-radius": "20px"}}/>
                            </div>
                            <div className="col-1">
                                <a className="fa-solid fa-gear fa-2xl my-auto" style={{"color": "dodgerblue", "text-decoration": "None"}} href={"explore-settings.html"} > </a> <br/>
                            </div>



                        </div>
                    </div>

                    <br/>

                    <div className="container">
                        <div className="row g-0 pb-1" >
                            <div className="col-2" style={{"border-width": "2px", "border-style": "solid", "border-top": "none", "border-left": "none", "border-right": "none", "border-bottom": "none"}}>
                                <span>
                                    <a style={{"color": "rgb(110, 118, 125)", "font-size": "15px", "text-decoration": "none"}} className="wd-pad">For you</a>
                                </span>
                            </div>
                            <div className="col-2" style={{"border-width": "2px", "border-style": "solid", "border-top": "none", "border-left": "none", "border-right": "none", "border-bottom": "none"}}>
                                <span>
                                    <a style={{"color": "rgb(110, 118, 125)", "font-size": "15px", "text-decoration": "none"}} className="wd-pad">Trending</a>
                                </span>
                            </div>
                            <div className="col-2" style={{"border-width": "2px", "border-style": "solid", "border-top": "none", "border-left": "none", "border-right": "none", "border-bottom": "none"}}>
                                 <span>
                                    <a style={{"color": "rgb(110, 118, 125)", "font-size": "15px", "text-decoration": "none"}} className="wd-pad">News</a>
                                </span>
                            </div>
                            <div className="col-2" style={{"border-width": "2px", "border-style": "solid", "border-top": "none", "border-left": "none", "border-right": "none", "border-bottom": "none"}}>
                                 <span>
                                    <a style={{"color": "rgb(110, 118, 125)", "font-size": "15px", "text-decoration": "none"}} className="wd-pad">Sports</a>
                                </span>
                            </div>
                            <div className="col-2" style={{"border-width": "2px", "border-style": "solid", "border-top": "none", "border-left": "none", "border-right": "none", "border-bottom": "none"}}>
                                 <span className="d-none d-md-block">
                                     <span style={{"border-bottom": "dodgerblue", "border-style": "solid", "border-right": "none", "border-left": "none", "border-top": "none"}}>
                                         <a style={{"color": "white", "font-size": "15px", "text-decoration": "none"}} className="wd-pad">Entertainment</a>
                                     </span>
                                </span>
                            </div>
                        </div>

                    </div>


                </div>
           <div className="wd-border-thin wd-border-color wd-border-solid" style={{"position": "relative"}}>
                    <img src={"../../../../tuiter/spacex.jpg"} style={{"width": "100%"}}/>
                    <div className="position-absolute" style={{"bottom": "10px", "left": "10px", "color": "white", "font-size": "45px"}}>SpaceX's Starship</div>
                </div>
           ${PostSummaryList()}
        </>
    );
}
export default ExploreComponent;

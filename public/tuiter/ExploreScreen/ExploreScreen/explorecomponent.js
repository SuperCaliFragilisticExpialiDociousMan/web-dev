import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="wd-border-thin wd-border-color wd-border-solid"  >
                    <br/>
                    <div class="container">
                        <div class="row">
                            <div class="col-11">
                                <i class="fa fa-magnifying-glass position-absolute my-auto" style="padding-left: 5px;  padding-top: 15px; color: darkgrey "></i>
                                <input type="text" class="wd-ip1" placeholder="   Search Twitter" style="width: 100%; padding: 10px; border-radius: 20px; ">
                            </div>
                            <div class="col-1">
                                <a class="fa-solid fa-gear fa-2xl my-auto" style="color: dodgerblue; text-decoration: None;  " href="explore-settings.html" ></a> <br/>
                            </div>



                        </div>
                    </div>

                    <br/>

                    <div class="container">
                        <div class="row g-0 pb-1" >
                            <div class="col-2" style="border-bottom: rgb(110, 118, 125); border-width: 2px; border-style: solid; border-top: none; border-left: none; border-right: none; border-bottom: none;">
                                <span>
                                    <a style="color: rgb(110, 118, 125); font-size: 15px; text-decoration: none;" class="wd-pad">For you</a>
                                </span>
                            </div>
                            <div class="col-2" style="border-bottom: rgb(110, 118, 125); border-width: 2px; border-style: solid; border-top: none; border-left: none; border-right: none; border-bottom: none;">
                                <span>
                                    <a style="color: rgb(110, 118, 125); font-size: 15px; text-decoration: none;" class="wd-pad">Trending</a>
                                </span>
                            </div>
                            <div class="col-2" style="border-bottom: rgb(110, 118, 125); border-width: 2px; border-style: solid; border-top: none; border-left: none; border-right: none; border-bottom: none;">
                                 <span>
                                    <a style="color: rgb(110, 118, 125); font-size: 15px; text-decoration: none;" class="wd-pad">News</a>
                                </span>
                            </div>
                            <div class="col-2" style="border-bottom: rgb(110, 118, 125); border-width: 2px; border-style: solid; border-top: none; border-left: none; border-right: none; border-bottom: none;">
                                 <span>
                                    <a style="color: rgb(110, 118, 125); font-size: 15px; text-decoration: none;" class="wd-pad">Sports</a>
                                </span>
                            </div>
                            <div class="col-2" style="border-bottom: rgb(29,161,242); border-width: 2px; border-style: solid; border-top: none; border-left: none; border-right: none; border-bottom: none;">
                                 <span class="d-none d-md-block">
                                     <span style="border-bottom: dodgerblue; border-style: solid; border-right: none; border-left: none; border-top: none;">
                                         <a style="color: white; font-size: 15px; text-decoration: none;" class="wd-pad">Entertainment</a>
                                     </span>
                                </span>
                            </div>
                        </div>

                    </div>


                </div>
           <div class="wd-border-thin wd-border-color wd-border-solid" style="position: relative;">
                    <img src="../../spacex.jpg" style="width: 100%;"/>
                    <div class="position-absolute" style=" bottom: 10px; left: 10px; color: white; font-size: 45px;">SpaceX's Starship</div>
                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

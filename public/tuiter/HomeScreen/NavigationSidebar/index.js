const NavigationSidebar = () => {
    return (`
<div class="list-group" style="background-color: #1e2125;">

<a class="list-group-item disabled" href=" " style="background-color: #1e2125;"> 
<i class="fab fa-twitter" style="color: white"></i>
</a >

<a class="list-group-item " href="../../HomeScreen/ExploreScreen/ExploreScreen.html" id="ExploreScreen" style="background-color: #1e2125; color: white;">
<i class="fa fa-home"></i>
<div class="d-none d-xxl-inline d-xl-inline">Home</div>
</a > 

<a class="list-group-item " href= "../../ExploreScreen/ExploreScreen/explore.html" id="explore" style="background-color: #1e2125; color: white;">
<i class="fa fa-hashtag"></i>
<div class="d-none d-xxl-inline d-xl-inline">Explore</div>
</a > 

<a class="list-group-item " href="#" id = "notifications" style="background-color: #1e2125; color: white;"> 
<i class="fa fa-bell"></i>
<div class="d-none d-xxl-inline d-xl-inline">Notification</div>
</a > 

<a class="list-group-item " href="#" id = "message" style="background-color: #1e2125; color: white;">
<i class="fa fa-envelope"></i>
<div class="d-none d-xxl-inline d-xl-inline">Message</div>
</a > 

<a class="list-group-item " href="#" id = "bookmarks" style="background-color: #1e2125; color: white;">
<i class="fa fa-bookmark"></i>
<span class="d-none d-xxl-inline d-xl-inline">Bookmarks</span>
</a > 

<a class="list-group-item" href="#" id = "lists" style="background-color: #1e2125; color: white;">
<i class="fa fa-list"></i>
<span class="d-none d-xxl-inline d-xl-inline">Lists</span>
</a > 

<a class="list-group-item" href="#" id = "more" style="background-color: #1e2125; color: white;">
<i class="fa fa-ellipsis-h"></i>
<span class="d-none d-xxl-inline d-xl-inline">More</span>
</a > 

</div>
<div class="d-grid mt-2">
<a href="#" class="btn btn-primary btn-block">
Tweet</a > </div>
<script type="text/javascript">

$(function () {
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
                       
})
</script>
`);
}
export default NavigationSidebar;
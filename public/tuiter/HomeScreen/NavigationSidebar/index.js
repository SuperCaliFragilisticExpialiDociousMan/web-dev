

const NavigationSidebar = () => {

    var html=`
            <table class="table" style="background-color: black; border-bottom: black; border-width: 0;">
                    <tbody style="background-color: #1e2125 ; border-bottom: black; border-width: 0;">
                    <tr style="border-color: black;"><td style="color: white; "><div class=" d-none d-xl-block"><i class="fab fa-twitter"></i></div><div class=" d-xl-none" style="text-align: center;"><i class="fa-brands fa-twitter"></i></div></td></tr>
                    <tr style="border-color: black;"><td style="color: white"><div class=" d-none d-xl-block"><i class="fa-solid fa-house-chimney-window pe-2" ></i><a href="../../HomeScreen/ExploreScreen/ExploreScreen.html" style="text-decoration: none; color: white;"> Home</a> </div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-house-chimney-window"></i></div></td></tr>
                    <tr style="background-color: dodgerblue ; border-color: black;"><td style="color: white; "><div class=" d-none d-xl-block"><i class="fa-solid fa-hashtag pe-2"></i><a href="../../ExploreScreen/ExploreScreen/explore.html" style="text-decoration: none; color: white;"> Explore</a> </div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-hashtag"></i></div></td></tr>
                    <tr style="border-color: black;" id="notications"><td style="color: white"><div class=" d-none d-xl-block"><i class="fa-solid fa-bell pe-2"></i><a href="#" style="text-decoration: none; color: white;"> Notifications</a> </div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-bell"></i></div></td></tr>
                    <tr style="border-color: black;" id="message"><td style="color: white"><div class=" d-none d-xl-block"><i class="fa-solid fa-envelope pe-2"></i><a href="#" style="text-decoration: none; color: white;"> Messages</a> </div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-envelope"></i></div></td></tr>
                    <tr style="border-color: black;" id="bookmarks"><td style="color: white"><div class=" d-none d-xl-block"><i class="fa-solid fa-bookmark pe-2"></i><a href="#" style="text-decoration: none; color: white;"> Bookmarks</a> </div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-bookmark"></i></div></td></tr>
                    <tr style="border-color: black;" id="lists"><td style="color: white"><div class=" d-none d-xl-block"><i class="fa-solid fa-list pe-2"></i><a href="#" style="text-decoration: none; color: white;"> Lists</a> </div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-list"></i></div></td></tr>
                    <tr style="border-color: black;" id="profiles"><td style="color: white"><div class=" d-none d-xl-block"><i class="fa-solid fa-user pe-2"></i><a href="#" style="text-decoration: none; color: white;"> Profiles</a> </div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-user"></i></div></td></tr>
                    <tr style="border-color: black;" id="more"><td style="color: white"><div class=" d-none d-xl-block"><span class="fa-stack fa-1x pe-2" style="margin-left: unset" >
                                                                                    <i class="fas fa-circle fa-stack-1x" style="color: white"></i>
                                                                                    <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse" style="color: black"></i>
                                                                                </span><a href="#" style="text-decoration: none; color: white;"> More</a> </div> </td></tr>
                         
                    <tr style="background-color: black; border-width: 0; border-bottom: black;"><td class="ps-0 pe-0" style="text-align: center; border-left: none; border-right: none; "><button type="button" style="border-width: 0 ; background-color: dodgerblue; color: white; width: 100%; border-radius: 15px;">Tweet</button></td></tr>
                    </tbody>
                </table>
                
                
                
                <script type="text/javascript">
                $(function(){
                    var listItems=$(".tb");
                    for (let i=0 ; i<listItems.length; i++){
                        listItems[i].classList.remove("activate");
                    }
                    var url =window.location.href ;
                    console.log(url);
                    var webpage=url.split("/");
                    var web=webpage[webpage.length-1].split('.');
                    var w=web[0];
                    document.getElementsByTagNameNS(w).classList.add("activate");
                    
                    $('#notifacations').click(function(){
                        $('.tb').removeClass("activate");
                        $('#notifacations').addClass("activate");
                    });
                    $('#message').click(function(){
                        $('.tb').removeClass("activate");
                        $('#message').addClass("activate");
                    });
                    $('#bookmarks').click(function(){
                        $('.tb').removeClass("activate");
                        $('#bookmarks').addClass("activate");
                    });
                    $('#lists').click(function(){
                        $('.tb').removeClass("activate");
                        $('#lists').addClass("activate");
                    });
                    $('#profiles').click(function(){
                        $('.tb').removeClass("activate");
                        $('#profiles').addClass("activate");
                    });
                    $('#more').click(function(){
                        $('.tb').removeClass("activate");
                        $('#more').addClass("activate");
                    });
                    
                }
                )
                
                
                
                </script>
    `




    return(html);
}

export default NavigationSidebar;

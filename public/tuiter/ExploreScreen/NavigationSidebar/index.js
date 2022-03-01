const NavigationSidebar = () => {
    return(`
            <table class="table" style="background-color: black; border-bottom: black; border-width: 0;">
                    <tbody style="background-color: #1e2125 ; border-bottom: black; border-width: 0;">
                    <tr style="border-color: black;"><td style="color: white; "><div class=" d-none d-xl-block"><i class="fab fa-twitter"></i></div><div class=" d-xl-none" style="text-align: center;"><i class="fa-brands fa-twitter"></i></div></td></tr>
                    <tr style="border-color: black;"><td style="color: white"><div class=" d-none d-xl-block"><i class="fa-solid fa-house-chimney-window pe-2" ></i> Home</div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-house-chimney-window"></i></div></td></tr>
                    <tr style="background-color: dodgerblue ; border-color: black;"><td style="color: white; "><div class=" d-none d-xl-block"><i class="fa-solid fa-hashtag pe-2"></i> Explore</div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-hashtag"></i></div></td></tr>
                    <tr style="border-color: black;"><td style="color: white"><div class=" d-none d-xl-block"><i class="fa-solid fa-bell pe-2"></i> Notifications</div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-bell"></i></div></td></tr>
                    <tr style="border-color: black;"><td style="color: white"><div class=" d-none d-xl-block"><i class="fa-solid fa-envelope pe-2"></i> Messages</div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-envelope"></i></div></td></tr>
                    <tr style="border-color: black;"><td style="color: white"><div class=" d-none d-xl-block"><i class="fa-solid fa-bookmark pe-2"></i> Bookmarks</div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-bookmark"></i></div></td></tr>
                    <tr style="border-color: black;"><td style="color: white"><div class=" d-none d-xl-block"><i class="fa-solid fa-list pe-2"></i> Lists</div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-list"></i></div></td></tr>
                    <tr style="border-color: black;"><td style="color: white"><div class=" d-none d-xl-block"><i class="fa-solid fa-user pe-2"></i> Profiles</div><div class=" d-xl-none" style="text-align: center;"><i class="fa-solid fa-user"></i></div></td></tr>
                    <tr style="border-color: black;"><td style="color: white"><div class=" d-none d-xl-block"><span class="fa-stack fa-1x pe-2" style="margin-left: unset" >
                                                                                    <i class="fas fa-circle fa-stack-1x" style="color: white"></i>
                                                                                    <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse" style="color: black"></i>
                                                                                </span> More</div> </td></tr>
                         
                    <tr style="background-color: black; border-width: 0; border-bottom: black;"><td class="ps-0 pe-0" style="text-align: center; border-left: none; border-right: none; "><button type="button" style="border-width: 0 ; background-color: dodgerblue; color: white; width: 100%; border-radius: 15px;">Tweet</button></td></tr>
                    </tbody>
                </table>

    `);
}
export default NavigationSidebar;

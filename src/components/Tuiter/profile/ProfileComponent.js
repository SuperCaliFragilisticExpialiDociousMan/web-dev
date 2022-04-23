import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    return (
        <>

            <div className="row">
                <div className="col-1 me-1" style={{"color":"white", "padding-top":"10px"}}>
                    <i className="fas fa-arrow-left"/>
                </div>
                <div className="col-10">
                    <div style={{"font-size": '20px', "color": 'white'}}>
                        <b>{profile.name}</b>
                    </div>

                    <div style={{color: 'gray'}}>
                        1,836 Tweets
                    </div>
                </div>
            </div>
            <div>
                <img src={profile.bannerPicture} height="300px" width="100%" style={{ "objectFit": 'cover'}} alt="..."/>

            </div>
            <div className="row">
                <div className="col-3" style={{position:'relative'}}>
                    <img src={profile.profilePicture}
                         height="80px"
                         width="80px"
                         style={{ "position": 'relative',  "border-radius": '50%', "marginTop": "-50px"}}/>

                    <div>
                        <div style={{"font-size": '20px', "font-weight": "bold", "color": "white"}}>
                            {profile.name}
                        </div>
                        <div style={{color: 'gray'}}>
                            @{profile.handle}
                        </div>
                    </div>
                </div>

                <div className="col">
                    <Link to="/tuiter/editProfile">
                        <button className="btn btn-dar rounded-pill border-dark float-end mt-2 text-white">
                            <b>Edit Profile</b>
                        </button>
                    </Link>

                </div>
            </div>
            <br/>
            <div className="ms-2">
                <div style={{"color": 'white'}}>
                    {profile.bio}
                </div>
                <br/>
                <div className="row d-flex justify-content-start" style={{color: 'grey'}}>
                    <div className="col-4">
                        <i className="fas fa-map-marker-alt"/>
                        <span >{profile.location}</span>
                    </div>
                    <div className="col-4">
                        <i className="fa fa-birthday-cake"/>
                        <span >Born: {profile.dateOfBirth}</span>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-calendar-alt"/>
                        <span >Joined: {profile.dateOfJoined}</span>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-2">
                        <span className="fw-bold text-white">{profile.followingCount}</span>
                        <span style={{"color": 'grey'}} className="p-2">Following</span>
                        <span className="fw-bold text-white">{profile.followersCount}</span>
                        <span style={{"color": 'grey'}} className="p-2">Followers</span>
                    </div>
                </div>
            </div>
            <br/><br/><br/>



        </>
    )
}
export default ProfileComponent;
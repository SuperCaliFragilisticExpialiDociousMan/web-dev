import React from "react";
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'


const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        dispatch({type: 'save', birth, bio, web, name, local, join})
    }


    let [name, setName] = useState({name: profile.name}) ;
    const nameHandler = (event) => {
        const name = event.target.value;
        const newName = {name : name};
        setName(newName);
    }


    let [bio, setBio] = useState({bio: profile.bio}) ;
    const bioHandler = (event) => {
        const bio = event.target.value;
        const newBio = { bio : bio};
        setBio(newBio);
    }


    let [local, setLocal] = useState({local: profile.location}) ;
    const locationHandler = (event) => {
        const location = event.target.value;
        const newLocation = {local : location}
        setLocal(newLocation);
    }


    let [web, setWeb] = useState({web : profile.website}) ;
    const websiteHandler = (event) => {
        const web = event.target.value;
        const newWeb = {web : web}
        setWeb(newWeb);
    }


    let [birth, setBirth] = useState({birth: profile.dateOfBirth});
    const birthHandler = (event) => {
        const birthday = event.target.value;
        const newBirth = {birth : birthday}
        setBirth(newBirth);
    }

    let [join, setJoin] = useState({join: profile.dateOfJoined});
    const JoinHandler = (event) => {
        const join = event.target.value;
        const newJoin = {join : join}
        setJoin(newJoin);
    }

    return (
        <>
            <div className="row">
                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <i className="fas fa-times"/>
                    </Link>
                </div>

                <div className="col-10">
                    <div style={{"font-size": '20px', "color": 'white'}}>
                        Edit Profile
                    </div>
                </div>

                <div className="col-1">
                    <button className="bg-white me-2 rounded-pill"
                            onClick={saveClickHandler}>
                        <span className="text-black">Save</span>
                    </button>
                </div>
            </div>

            <div className="mt-1">
                <img src={profile.bannerPicture}
                     height="300px" width="100%" style={{ objectFit: 'cover' }}/>
            </div>
            <div className="ms-2">
                <div>
                    <img src={profile.profilePicture}
                         height="100px"
                         width="80px"
                         style={{"position": 'relative',  "marginTop": '-75px' , "border-radius":"50%"}}/>
                </div>

                <div className="mt-2">
                    <label>Name</label>
                    <textarea className="bg-black text-white " id="name" style={{width:"100%", "text-color":"white", "background-color":"black"}}
                              value = {name.name} onChange={nameHandler}>
                                {profile.name}
                    </textarea>
                </div>

                <div className="mt-2 ">
                    <label>Bio</label>
                    <textarea className="text-white bg-black" id='bio' style={{width:"100%", "text-color":"white", "background-color":"black"}}
                              value={bio.bio} onChange={bioHandler}>
                                {profile.bio}
                    </textarea>
                </div>

                <div className="mt-2">
                    <label>Location</label>

                    <textarea  id="location" className="text-white bg-black" style={{width:"100%", "text-color":"white", "background-color":"black"}}
                              value={local.local} onChange={locationHandler}>
                                {profile.location}
                    </textarea>
                </div>

                <div className="mt-2">
                    <label>Website</label>
                    <textarea className="text-white bg-black" id="website" style={{width:"100%", "text-color":"white", "background-color":"black"}}
                              value={web.web} onChange={websiteHandler}>
                                {profile.website}
                    </textarea>
                </div>

                <div>
                    <div>
                        <span>Date of Birth</span>
                    </div>
                    <div>
                        <textarea id="birthday" className="text-white bg-black" style={{width:"100%", "text-color":"white", "background-color":"black"}}
                               value={birth.birth}  onChange = {birthHandler}/>
                    </div>
                </div>

                <div>
                    <div>
                        <span>Date of Joined</span>
                    </div>
                    <div>
                        <textarea id="birthday" className="text-white bg-black" style={{width:"100%", "text-color":"white", "background-color":"black"}}
                                  value={join.join}  onChange = {JoinHandler}/>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
        </>
    )
}
export default EditProfile
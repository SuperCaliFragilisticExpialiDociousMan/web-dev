import profile from '../profile/profiledata'

const profileReducer = (state = profile, action) =>{
    switch (action.type) {
        case 'save':
            const newProfile = {
                name: action.name.name,
                bio: action.bio.bio,
                website: action.web.web,
                location: action.local.local,
                dateOfBirth: action.birth.birth,
                dateOfJoined: action.join.join,
                handle: 'jose_joestar',
                profilePicture: '../../../tuiter/martin.jpg',
                bannerPicture: '../../../tuiter/interstellar.jpg',
                dateJoined: '1/2022',
                followingCount: 312,
                followersCount: 180
            }
            return (newProfile);
        default:
            return profile;
    }
};
export default profileReducer;

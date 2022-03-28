const profileData=[ {
    firstName: "Martin", lastName: "Shi", handle: "Code Elite",
    profilePicture: "../../../../tuiter/martin.jpg",     bannerPicture: "../../../../tuiter/interstellar.jpg",
    bio: "Student, Data Scientist, Algorithm Engineer, adept at data mining / deep learning / data modeling, has experience on Bayesian Biostatistics / Quantitative Finance",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",    dateOfBirth: "3/1998",    dateJoined: "12/2020",
    followingCount: 312,    followersCount: 180
} ]

const ProfileReducer = () => {
    return profileData;
}

export default ProfileReducer;

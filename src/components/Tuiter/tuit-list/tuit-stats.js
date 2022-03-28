import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
    <span onClick={likeTuit}>
    {
        tuit.liked &&
        <i className="fa fa-heart"
           style={{color: 'red'}}></i>
    }
        {
            !tuit.liked &&
            <i className="fa fa-heart"></i>
        }
        {tuit.stats && tuit.stats.likes}
    </span>
);
}
export default TuitStats;
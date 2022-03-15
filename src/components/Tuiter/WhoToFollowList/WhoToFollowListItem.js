

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../../tuiter/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) =>
{
    return (
        <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <img src={who.avatarIcon} height='40px' width='40px' style={{'border-radius': '50px'}}/></div>
            <div className='col-8' style={{'color': 'white'}}><strong>{who.userName}</strong>
                <i className='fa-solid fa-circle-check'> </i><br/>@{who.handle}</div>
            <div className='col-2 my-auto'>
            <button style={{'border-radius': '15px',  'background-color': 'white', 'color': 'black'}}>Follow</button>
        </div>
        </div>
        </div>
    ) ;

}


export default WhoToFollowListItem;


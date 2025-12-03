import Sidebar from '../../../common/sidebar/Sidebar'
import Profile from '../../../Profile/Profile'
import Rightbar from '../../../common/rightbar/RightBar'
import './Profilelayout.css'


const Profilelayout = () => {
    return (
        <div className='ProfilelayoutContainer'>Profilelayout
            <Sidebar />
            <Profile />
            <Rightbar />
        </div>
    )
}

export default Profilelayout
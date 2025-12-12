
import Rightbar from '../../../common/rightbar/rightbar'
import Sidebar from '../../../common/sidebar/Sidebar'
import Profile from '../../../profile/Profile'

import './Profilelayout.css'


const Profilelayout = () => {
    return (
        <div className='ProfilelayoutContainer'>Profilelayout
            <Sidebar />
            <Profile />
           <Rightbar/>
        </div>
    )
}

export default Profilelayout
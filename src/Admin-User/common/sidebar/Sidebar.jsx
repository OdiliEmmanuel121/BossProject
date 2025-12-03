import './sidebar.css'
import Data from '../sidebar/data/Data'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../../../assets/logo-image.png'
import LogoutIcon from '../../../assets/LogoutIcon.png'


const Sidebar = () => {
    return (
        <div className='boxContainer'>
            <img src={logo} alt="logoImage" className='PICTURELOGO' />
            <div className='bar' style={{ display: 'none' }}>
                {/* <MenuIcon /> */}
            </div>
            {Data.map((item) => {
                return (
                    <div key={item.id} className='InnerElement'>
                        <div className='sidebar'>
                            <Link to={item.path} className='new'>
                                <img src={item.icon} alt="icon-image" />
                                <div>{item.heading}</div >
                            </Link>
                        </div>
                    </div>

                )

            })}
            <div className='logoutandIcon'>
                <img src={LogoutIcon} alt="LogoutIcon" className='LogoutIcon' />
                <h3>Logout</h3>
            </div>
        </div>
    )
}

export default Sidebar
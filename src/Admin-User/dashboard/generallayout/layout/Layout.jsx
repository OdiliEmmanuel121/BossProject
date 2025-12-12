
import Sidebar from '../../../common/sidebar/Sidebar'
import Rightbar from '../../../common/rightbar/RightBar'
import './Layout.css'
import Dashboard from '../../dashboard'

const Layout = () => {
  return (
    <div className='LayoutContainer'>
        <Sidebar/>
        <Dashboard/>
        <Rightbar/>
    </div>
  )
}

export default Layout
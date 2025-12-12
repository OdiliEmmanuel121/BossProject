
import Sidebar from '../../../common/sidebar/Sidebar'
import Rightbar from '../../../common/rightbar/Rightbar'
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

import Sidebar from '../../../common/sidebar/Sidebar'
import Dashboard from "../../Dashboard"
import Rightbar from '../../../common/rightbar/rightbar'

import './Layout.css'

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
// import '/Layout.css'
import Sidebar from '../../../common/sidebar/Sidebar'
import './Layout.css'
import Dashboard from '../../dashboard'
import Rightbar from '../../../common/rightbar/rightbar'

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
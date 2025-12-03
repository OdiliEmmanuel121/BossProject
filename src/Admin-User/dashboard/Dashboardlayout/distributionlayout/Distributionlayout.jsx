import Sidebar from '../../../common/sidebar/Sidebar'
import Distribution from '../../../distrubution/Distribution'
import Rightbar from '../../../common/rightbar/RightBar'
import './Distributionlayout.css'




const distrubutionlayout = () => {
  return (
    <div className="distributionLayoutContainer" >distrubutionlayout
    <Sidebar/>
    <Distribution/>
    <Rightbar/>
    </div>
    
  )
}

export default distrubutionlayout
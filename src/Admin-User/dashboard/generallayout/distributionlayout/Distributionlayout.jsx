import './Distributionlayout.css'

import Rightbar from "../../../common/rightbar/rightbar"
import Sidebar from "../../../common/sidebar/Sidebar"
import Distribution from "../../../distrubution/Distribution"


const Distributionlayout = () => {
    return (
        <div className="distributionLayoutContainer">
            <Sidebar />
            <Distribution />
            <Rightbar/>
        </div>
    )
}

export default Distributionlayout
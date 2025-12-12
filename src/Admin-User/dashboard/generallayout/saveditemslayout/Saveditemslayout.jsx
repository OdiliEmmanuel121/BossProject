import Sidebar from '../../../common/sidebar/Sidebar'
import Saveditems from "../../../saveditems/SavedItems"
import Rightbar from '../../../common/rightbar/RightBar'
import './Saveditemslayout.css'



const Saveditemslayout = () => {
    return (
        <div className='SaveditemslayoutContainer'>Saveditemslayout
            <Sidebar />
            <Saveditems/>
            <Rightbar/>
        </div>
    )
}

export default Saveditemslayout
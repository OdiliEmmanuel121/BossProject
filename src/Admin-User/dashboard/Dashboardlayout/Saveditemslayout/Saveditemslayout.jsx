import Sidebar from '../../../common/sidebar/Sidebar'
import Saveditems from "../../../SavedItems/SavedItems"
import Rightbar from '../../../common/rightbar/rightbar'
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
import Sidebar from '../../../common/sidebar/Sidebar'
import Saveditems from "../../../savedItems/SavedItems"
import Rightbar from '../../../common/rightbar/Rightbar'
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
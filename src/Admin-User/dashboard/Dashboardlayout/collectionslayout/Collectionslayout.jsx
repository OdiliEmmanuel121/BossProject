import Sidebar from '../../../common/sidebar/Sidebar'
import Collections from '../../../collection/Collections'
import Rightbar from '../../../common/rightbar/RightBar'
import './Collectionslayout.css'

const collectionslayout = () => {
    return (
        <div className='collectionslayoutContainer'>collectionslayout
            <Sidebar />
            <Collections />
            <Rightbar />
        </div>
    )
}

export default collectionslayout
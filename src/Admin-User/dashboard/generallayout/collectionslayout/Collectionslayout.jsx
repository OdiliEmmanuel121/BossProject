import Sidebar from '../../../common/sidebar/Sidebar'
import './Collectionslayout.css'
import Rightbar from '../../../common/rightbar/rightbar'
import Collection from '../../../collection/Collection'

const collectionslayout = () => {
  return (
     <div className='collectionslayoutContainer'>collectionslayout
            <Sidebar />
            <Collection />
            <Rightbar />
        </div>
  )
}

export default collectionslayout
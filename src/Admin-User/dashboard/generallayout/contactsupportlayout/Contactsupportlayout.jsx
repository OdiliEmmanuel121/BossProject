import Rightbar from '../../../common/rightbar/RightBar'
import Sidebar from '../../../common/sidebar/Sidebar'
import Contactsupport from '../../../contactsupport/Contactsupport'





import './Contactsupportlayout.css'

const Contactsupportlayout = () => {
    return (
        <div className='Contactsupportlayout'>Contactsupportlayout
            <Sidebar />
            <Contactsupport/>
            <Rightbar/>
        </div>

    )
}

export default Contactsupportlayout
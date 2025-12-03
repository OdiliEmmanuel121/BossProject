import Sidebar from '../../../common/sidebar/Sidebar'
import Wallet from '../../../Wallet/Wallet'
import Rightbar from '../../../common/rightbar/RightBar'
import './WalletLayout.css'


const walletlayout = () => {
  return (
    <div className='WalletLayoutContainer'>walletlayout
    <Sidebar/>
    <Wallet/>
    <Rightbar/>
    </div>
  )
}

export default walletlayout
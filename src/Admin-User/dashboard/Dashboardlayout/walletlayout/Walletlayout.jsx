import Rightbar from '../../../common/rightbar/Rightbar'
import Sidebar from '../../../common/sidebar/Sidebar'
import Wallet from '../../../wallet/Wallet'

import './WalletLayout.css'


const Walletlayout = () => {
  return (
    <div className='WalletLayoutContainer'>walletlayout
    <Sidebar/>
    <Wallet/>
    <Rightbar/>
    </div>
  )
}

export default Walletlayout
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Distributionlayout from './Admin-User/dashboard/generallayout/distributionlayout/Distributionlayout'
import Distribution from './Admin-User/distrubution/Distribution'
import SavedItems from './Admin-User/saveditems/SavedItems'
import Wallet from './Admin-User/wallet/Wallet'
import Profile from './Admin-User/profile/Profile'
import Profilelayout from './Admin-User/dashboard/generallayout/profilelayout/Profilelayout'
import Layout from './Admin-User/dashboard/generallayout/Layout/Layout'
import Saveditemslayout from './Admin-User/dashboard/generallayout/Saveditemslayout/Saveditemslayout'
import Walletlayout from './Admin-User/dashboard/generallayout/walletlayout/walletlayout'
import Contactsupportlayout from './Admin-User/dashboard/generallayout/contactsupportlayout/Contactsupportlayout'
import Contactsupport from './Admin-User/Contactsupport/Contactsupport'
import Dashboard from './Admin-User/dashboard/Dashboard'
import Collectionslayout from './Admin-User/dashboard/generallayout/collectionslayout/Collectionslayout'
import Collection from './Admin-User/collection/Collection'







const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
          <Route path='/ dashboard' element={<Dashboard/>} />
          <Route path='/' element={<Layout />} />

          <Route path='/Saveditems' element={<SavedItems />} />
          <Route path='Sav' element={<Saveditemslayout/>} />

          <Route path='/distribution' element={<Distribution />} />
          <Route path='/Distru' element={<Distributionlayout />} />

          <Route path='/collections' element={<Collection/>} />
          <Route path='/col' element={<Collectionslayout/>} />  
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/Wall' element={<Walletlayout />} />

          <Route path='/profile' element={<Profile />} />
          <Route path='/Pro' element={<Profilelayout />} />

          <Route path='/contactsupport' element={<Contactsupport/>} />
          <Route path='/Con' element={<Contactsupportlayout/>} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
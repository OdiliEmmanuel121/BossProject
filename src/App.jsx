import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Admin-User/dashboard/generallayout/layout/Layout'
import Distributionlayout from './Admin-User/dashboard/generallayout/distributionlayout/Distributionlayout'
import Distribution from './Admin-User/distrubution/Distribution'
import SavedItems from './Admin-User/savedItems/SavedItems'
import Saveditemslayout from './Admin-User/dashboard/generallayout/saveditemslayout/Saveditemslayout'
import Collections from './Admin-User/collection/Collections'
import Wallet from './Admin-User/wallet/Wallet'
import Profile from './Admin-User/profile/Profile'
import Profilelayout from './Admin-User/dashboard/generallayout/profilelayout/Profilelayout'
import Collectionslayout from './Admin-User/dashboard/generallayout/collectionslayout/Collectionslayout'
import Walletlayout from './Admin-User/dashboard/generallayout/walletlayout/Walletlayout'
import Contactsupportlayout from './Admin-User/dashboard/generallayout/contactsupportlayout/Contactsupportlayout'
import Contactsupport from './Admin-User/contactsupport/Contactsupport'
import Dashboard from './Admin-User/dashboard/Dashboard'






const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
          <Route path='/ dashboard' element={<Dashboard/>} />
          <Route path='/' element={<Layout />} />

          <Route path='/Saveditems' element={<SavedItems />} />
          <Route path='Sav' element={<Saveditemslayout />} />

          <Route path='/distribution' element={<Distribution />} />
          <Route path='/Distru' element={<Distributionlayout />} />

          <Route path='/collections' element={<Collections />} />
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
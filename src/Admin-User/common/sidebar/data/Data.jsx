// import Icon = require("react-icon")
import GridViewIcon from '@mui/icons-material/GridView';

// import distribution from '../../../../assets/DistributionIcon.png'
import Profile from '../../../../assets/ProfileIcon.png'
import SaveditemIcon from '../../../../assets/SaveditemIcon.png'
import WalletIcon from '../../../../assets/WalletIcon.png'
import distribution from '../../../../assets/DisIcon.png'
import dashboard from '../../../../assets/DashboardIcon.png'
import ContactSupportIcon from '../../../../assets/ContactSupportIcon.png'
import CollectionIcon from '../../../../assets/CollectionIcon.png'

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ShareIcon from '@mui/icons-material/Share';
// import SaveAltIcon from '@mui/icons-material/SaveAlt';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Data = [
    {
        id: 1,
        icon: dashboard,
        heading: "Dashboard",
        path: '/'
    },
    {
        id: 2,
        icon: distribution,
        heading: "Distribution",
        path: '/Distru'
    },
    {
        id: 3,
        icon: SaveditemIcon,
        heading: " Saved Items",
        path: '/Sav'
    },
    {
        id: 4,
        icon: CollectionIcon,
        heading: "Collections",
        path: '/col'
    },
    {
        id: 5,
        icon: WalletIcon,
        heading: " Wallet ",
        path: '/Wall'
    },
    {
        id: 6,
        icon: Profile,
        heading: "Profile",
        path: '/Pro'
    },
    {
        id: 7,
        icon: ContactSupportIcon,
        heading: "Contactsupport",
        path: '/Con'
    }

]

export default Data
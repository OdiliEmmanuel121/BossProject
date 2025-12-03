import './Distribution.css'
import { AccountCircle, ConnectedTvRounded, ConnectWithoutContact, ConnectWithoutContactSharp, Search, Share, ShoppingBag } from '@mui/icons-material';
import Box from '@mui/material/Box';
import distimage5 from '../../assets/distimage5.jpg'
import distimage2 from '../../assets/distimage2.jpg'
import distimage4 from '../../assets/distimage4.jpg'
import distimage6 from '../../assets/distimage6.jpg'
import distimage9 from '../../assets/distimage9.jpg'


const Distribution = () => {
  return (
    <div className='DistributionContainer'>
      <div className='DistFirstSection'>
        <h4> Good morning</h4>
        <p> Emmanuel </p>
        <AccountCircle />
        <input type="Search" placeholder='Search items' className='Distsearcheng' />
        <a href="#" className="Distbutton"> Search </a>
      </div>
      <div className='DistSecondSection'>
        <h4> Purchased Items ready for distribution </h4>
      </div>
      <div className='DistThirdSection'>
        <p>Select items to distribute</p>
        <div className='DistCheckbox'>
          <h5>Select all</h5>
          <input type="checkbox" />
        </div >
      </div>

      <Box className='DistBoxSection1' sx={{ py: 3 }}>
        <div className='DistcardBox'>
          <div className="Distcard1">
            <img src={distimage5} alt="Beans and Plantain" className="Distcard-image5" />
          </div>
        </div>

        <div className='DistcardBox'>
          <div className="Distcard2">
            <img src={distimage2} alt="Beans and Plantain" className="Distcard-image2" />
          </div>
        </div>

        <div className='DistcardBox'>
          <div className="Distcard3">
            <img src={distimage4} alt="Beans and Plantain" className="Distcard-image4" />
          </div>
        </div>
      </Box>

      <Box className='DistBoxSection2' sx={{ py: 3 }}>
        <div className='DistcardBox'>
          <div className="Distcard1">
            <img src={distimage6} alt="Beans and Plantain" className="Distcard-image6" />
          </div>
        </div>

        <div className='DistcardBox'>
          <div className="Distcard2">
            <img src={distimage9} alt="Beans and Plantain" className="Distcard-image9" />
          </div>
        </div>
      </Box>

      <div className='ClassDistbutton1'>
        <a href="#" className="Distbutton1">Click to see similar products </a>
      </div>
    </div>
  )
}

export default Distribution
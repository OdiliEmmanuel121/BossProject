import React from 'react'
import './Dashboard.css'
import { AccountCircle, ConnectedTvRounded, ConnectWithoutContact, ConnectWithoutContactSharp, Search, Share, ShoppingBag } from '@mui/icons-material';
import Box from '@mui/material/Box';
import restu1 from '../../assets/restu1.jpg'
import vintage1 from '../../assets/vintage1.jpg'
import vintage2 from '../../assets/vintage2.jpg'
import vintage3 from '../../assets/vintage3.jpg'
import vintage4 from '../../assets/vintage4.jpg'
import vintage5 from '../../assets/vintage5.jpg'
import vintage6 from '../../assets/vintage6.jpg'
import Vector1 from '../../assets/Vector1.png'
import Vector2 from '../../assets/Vector2.png'
import Vector3 from '../../assets/Vector3.png'
import Group78 from '../../assets/Group78.png'



const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
      <div className='FirstSection'>
        <h4> Good morning</h4>
        <p> Emmanuel </p>
        <AccountCircle />
        <input type="Search" placeholder='Search items' className='Firstsearcheng' />
        <a href="#" className="Firstbutton"> Search </a>
        
      </div>

      <div className='SecondSetion'>
        <Box className='Box01' >
          {/* <Share /> */}
          <img src={Vector1} alt="Vector1" className='Vector1' />
          <h3 className='h3secondSection1'>Distribution</h3>
        </Box>
        <Box className='Box02' >
          {/* <ShoppingBag /> */}
          <img src={Vector2} alt="Vector2" className='Vector2' />
          <h3 className='h3secondSection2' >Order</h3>
        </Box>
        <Box className='Box03'>
          {/* <ConnectWithoutContactSharp /> */}
          <img src={Vector3} alt="Vector3" className='Vector3' />
          <h3 className='h3secondSection3'>Connect with Stylists</h3>
        </Box>
      </div>

      <div >
        <div className='LatestTrend'>
          <h5 >Latest Trends In Stocks</h5>
        </div>
        <Box className='BoxSection' sx={{ py: 3 }}>
          <div className='cardBox'>
            <div className="card1">
              <img src={vintage1} alt="Beans and Plantain" className="card-image1" />
              <div className="card-content1">
                <div className="card-title1">
                  <h3>Thick Vintage</h3>
                  <h3 >N4300</h3>
                </div>
                <div className='card-text1'>
                  <img src={Group78} alt="Group78" />
                  <p className="card-text1">
                    40 units in stock
                  </p>
                </div>
                <a href="#" className="card-button1">Add to cart</a>
              </div>
            </div>
          </div>

          <div className='cardBox'>
            <div className="card2">
              <img src={vintage2} alt="Beans and Plantain" className="card-image2" />
              <div className="card-content2">
                <div className="card-title2">
                  <h3>Thick Vintage</h3>
                  <h3 >N4300</h3>
                </div>
                <p className="card-text2">
                  <img src={Group78} alt="Group78" />
                  40 units in stock              </p>
                <a href="#" className="card-button2">Add to cart</a>
              </div>
            </div>
          </div>

          <div className='cardBox'>
            <div className="card3">
              <img src={vintage3} alt="Beans and Plantain" className="card-image3" />
              <div className="card-content3">
                <div className="card-title3">
                  <h3>Thick Vintage</h3>
                  <h3 >N4300</h3>
                </div>
                <p className="card-text3">
                  <img src={Group78} alt="Group78" />
                  40 units in stock              </p>
                <a href="#" className="card-button3">Add to cart</a>
              </div>
            </div>
          </div>
        </Box>
      </div>
      <div >
        <Box className='BoxSection2' sx={{ py: 3 }}>
          <div className='cardBox'>
            <div className="card1">
              <img src={vintage4} alt="Beans and Plantain" className="card-image4" />
              <div className="card-content1">
                <div className="card-title1">
                  <h3>Thick Vintage</h3>
                  <h3 >N4300</h3>
                </div>
                <p className="card-text1">
                  <img src={Group78} alt="Group78" />
                  40 units in stock  </p>
                <a href="#" className="card-button1">Add to cart</a>
              </div>
            </div>
          </div>

          <div className='cardBox'>
            <div className="card2">
              <img src={vintage5} alt="Beans and Plantain" className="card-image5" />
              <div className="card-content2">
                <div className="card-title2">
                  <h3>Thick Vintage</h3>
                  <h3 >N4300</h3>
                </div>
                <p className="card-text2">
                  <img src={Group78} alt="Group78" />
                  40 units in stock              </p>
                <a href="#" className="card-button2">Add to cart</a>
              </div>
            </div>
          </div>

          <div className='cardBox'>
            <div className="card3">
              <img src={vintage6} alt="Beans and Plantain" className="card-image6" />
              <div className="card-content3">
                <div className="card-title3">
                  <h3>Thick Vintage</h3>
                  <h3 >N4300</h3>
                </div>
                <p className="card-text3">
                  <img src={Group78} alt="Group78" />
                  40 units in stock              </p>
                <a href="#" className="card-button3">Add to cart</a>
              </div>
            </div>
          </div>
        </Box>
      </div>

    </div>
  )
}

export default Dashboard
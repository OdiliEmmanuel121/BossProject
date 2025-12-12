import "./Collections.css"
import { AccountCircle, ConnectedTvRounded, ConnectWithoutContact, ConnectWithoutContactSharp, Search, Share, ShoppingBag } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { FaArrowRightLong } from "react-icons/fa6";
import restu1 from '../../assets/restu1.jpg'
import restu2 from '../../assets/restu2.jpg'
import restu3 from '../../assets/restu3.webp'
import food4 from '../../assets/food4.jpg'
import food3 from '../../assets/food3.jpg'
import food2 from '../../assets/food2.jpg'
import food1 from '../../assets/food1.jpg'
import cartoonfood1 from '../../assets/cartoonfood1.png'
import drink1 from '../../assets/drink1.jpg'
import Group78 from '../../assets/Group78.png'
import Vector1 from '../../assets/Vector1.png'
import Vector2 from '../../assets/Vector2.png'
import Vector3 from '../../assets/Vector3.png'

import sen4 from  '../../assets/sen4.jpg'
import sen5 from  '../../assets/sen5.jpg'
import sen6 from  '../../assets/sen6.jpg'
import sen7 from  '../../assets/sen7.jpg'
import vintage1 from '../../assets/vintage1.jpg'
import vintage2 from '../../assets/vintage2.jpg'
import vintage3 from '../../assets/vintage3.jpg'
import vintage4 from '../../assets/vintage4.jpg'
import damask1 from '../../assets/damask1.jpg'



const collection = () => {
  return (
    <div className='CollectionsContainer'>
      <div className='CollFirstSection'>
        <h4> Good morning</h4>
        <p> Emmanuel </p>
        <AccountCircle />
        <input type="Search" placeholder='Search items' className='Collsearcheng' />
        <a href="#" className="Collbutton"> Search </a>
      </div>
      <div className="CollSecondSection">
        <p>Collection</p>
      </div>
      <div className="CollThirdSection">
        <div className="CollButtonContainer">
          <a href="#" className="CollButton1"> Ankara </a>
          <a href="#" className="CollButton2"> Vintage </a>
          <a href="#" className="CollButton3"> Damask </a>
          <a href="#" className="CollButton4"> Cashmere </a>
          <a href="#" className="CollButton5"> Senator </a>
        </div>
        <p>View others here</p>
        <FaArrowRightLong />
      </div>
      <div className="CollFourtSection">
        <Box className='BoxSection' sx={{ py: 3 }}>
          <div className='cardBox'>
            <div className="card1">
              <img src={sen7} alt="Beans and Plantain" className="card-image1" />
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
              <img src={vintage1} alt="Beans and Plantain" className="card-image2" />
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
              <img src={sen6} alt="Beans and Plantain" className="card-image3" />
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
        <div>
          <Box className='BoxSection2' sx={{ py: 3 }}>
            <div className='cardBox'>
              <div className="card1">
                <img src={vintage2} alt="Beans and Plantain" className="card-image4" />
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
                <img src={sen5} alt="Beans and Plantain" className="card-image5" />
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
                <img src={sen4} alt="Beans and Plantain" className="card-image6" />
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
        <div>
          <Box className='BoxSection2' sx={{ py: 3 }}>
            <div className='cardBox'>
              <div className="card1">
                <img src={damask1} alt="Beans and Plantain" className="card-image4" />
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
                <img src={vintage4} alt="Beans and Plantain" className="card-image5" />
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
                <img src={vintage3} alt="Beans and Plantain" className="card-image6" />
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
    </div>
  )
}

export default collection
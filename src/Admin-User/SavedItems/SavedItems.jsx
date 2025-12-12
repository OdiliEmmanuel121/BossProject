import './SavedItems.css'
import { AccountCircle, ConnectedTvRounded, ConnectWithoutContact, ConnectWithoutContactSharp, Search, Share, ShoppingBag } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Group78 from '../../assets/Group78.png'
import damask4 from  '../../assets/damask4.jpg'
import damask5 from  '../../assets/damask5.jpg'
import damask7 from  '../../assets/damask7.jpg'
import vintage8 from  '../../assets/vintage8.jpg'
import sen3 from  '../../assets/sen3.jpg'
import sen2 from  '../../assets/sen2.jpg'
import sen1 from  '../../assets/sen1.jpg'
import sen4 from  '../../assets/sen4.jpg'
import vintage7 from  '../../assets/vintage7.jpg'
import vintage3 from  '../../assets/vintage3.jpg'







const SavedItems = () => {
  return (
    <div className='SaveditemContainer'>
      <div className='SavFirstSection'>
        <h4> Good morning</h4>
        <p> Emmanuel </p>
        <AccountCircle />
        <input type="Search" placeholder='Search items' className='Savsearcheng' />
        <a href="#" className="Savbutton"> Search </a>
      </div>
      <div className='SavpSection'>
        <p> Saved Items</p>
      </div>

      <div className='BoxSection1'>
        <Box className='BoxSection' sx={{ py: 3 }}>
          <div className='cardBox'>
            <div className="card1">
              <img src={vintage3} alt="Beans and Plantain" className="card-image1" />
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
              <img src={damask7} alt="Beans and Plantain" className="card-image2" />
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
              <img src={sen3} alt="Beans and Plantain" className="card-image3" />
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
              <img src={damask5} alt="Beans and Plantain" className="card-image4" />
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
              <img src={sen2} alt="Beans and Plantain" className="card-image5" />
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
              <img src={vintage7} alt="Beans and Plantain" className="card-image6" />
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
              <img src={sen1} alt="Beans and Plantain" className="card-image4" />
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
              <img src={vintage8} alt="Beans and Plantain" className="card-image5" />
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
    </div>
  )
}

export default SavedItems
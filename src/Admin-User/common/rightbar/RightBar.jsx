
import './Rightbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import food1 from '../../../assets/food1.jpg'
import Blurimage from '../../../assets/Blurimage.png'
import RectangleImage from '../../../assets/RectangleImage.png'
import React, { useState } from 'react';



const rightbar = () => {
    // Initialize the count state to 1, as a cart item usually starts at quantity 1.
    const [count, setCount] = useState(1);

    // Function to increase the quantity
    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1);
    };

    // Function to decrease the quantity, preventing it from going below 1.
    const handleDecrease = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className='rightbarContainer'>
            <div className='firstItem'>
                Cart items
                <ShoppingCartIcon />
            </div>
            <div className="productCard">
                <img src={food1} alt="productname" className='foodImage' />
                <div className="cardContent">
                    <h4>Colourful Ankara Fabrics...</h4>
                    <div className="flex-grow">
                        {/* Quantity Control */}
                        <div className="IncreDecre">
                            <button
                                onClick={handleDecrease}
                                disabled={count <= 1} // Disable button when count is 1
                                className="decrease"
                                aria-label="Decrease quantity"
                            >
                                -
                            </button>
                            <span className="spanCount">{count}</span>
                            <button
                                onClick={handleIncrease}
                                className="decrease"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <button className="buttonItem">
                        Remove
                    </button>
                </div>
            </div>
            <div className='checkoutBotton'>
                <a href="#" className="card-button20">Proceed to checkout</a>
            </div>
            <p className='p1tag'>Stay up to date with our adverts here  </p>
            <div className='BlurImage'>
                <img src={RectangleImage} alt="RectangleImage" className='RectangleImage' />
            </div>
            <div>
                <img src={Blurimage} alt="blurImage" className='BlurImage1' />
            </div>
        </div>
    )
}

export default rightbar


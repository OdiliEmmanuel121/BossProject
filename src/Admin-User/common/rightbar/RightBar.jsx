import React, { useState } from 'react';
import './Rightbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close'; // Import a close icon
import food1 from '../../../assets/food1.jpg'
import Blurimage from '../../../assets/Blurimage.png'
import RectangleImage from '../../../assets/RectangleImage.png'


const Rightbar = () => {
    // State for cart quantity (as in original code)
    const [count, setCount] = useState(1);
    
    // State to control mobile menu visibility (NEW)
    const [isOpen, setIsOpen] = useState(false); 

    // Function to toggle the cart view (NEW)
    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    // Functions to increase/decrease quantity (as in original code)
    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrease = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        // Apply 'cart-open' class conditionally for mobile visibility
        <div className={`rightbarContainer ${isOpen ? 'cart-open' : ''}`}>
            
            {/* --- MOBILE TOGGLE / ALWAYS VISIBLE ICON (firstItem is now the Header) --- */}
            <div className='cart-header' onClick={toggleCart}>
                {/* On desktop, this displays "Cart items" + icon */}
                <span className='desktop-text'>Cart items</span> 
                
                <div className='cart-icon-wrapper'>
                    {/* Display CloseIcon when open, ShoppingCartIcon when closed/default */}
                    {isOpen ? <CloseIcon /> : <ShoppingCartIcon />}
                    {/* You could add a badge here if you have a total item count state */}
                </div>
            </div>

            {/* --- CART CONTENT (Hidden on mobile by default) --- */}
            <div className='cart-content'>
                
                {/* Product Card */}
                <div className="productCard">
                    <img src={food1} alt="productname" className='foodImage' />
                    <div className="cardContent">
                        <h4>Colourful Ankara Fabrics...</h4>
                        <div className="flex-grow">
                            {/* Quantity Control */}
                            <div className="IncreDecre">
                                <button
                                    onClick={handleDecrease}
                                    disabled={count <= 1}
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
                
                {/* Checkout Button */}
                <div className='checkoutBotton'>
                    <a href="#" className="card-button20" onClick={toggleCart}>
                        Proceed to checkout 
                    </a>
                </div>
                
                {/* Adverts/Extra content */}
                <p className='p1tag'>Stay up to date with our adverts here </p>
                <div className='BlurImage'>
                    <img src={RectangleImage} alt="RectangleImage" className='RectangleImage' />
                </div>
                <div>
                    <img src={Blurimage} alt="blurImage" className='BlurImage1' />
                </div>
            </div>
        </div>
    )
}

export default Rightbar;
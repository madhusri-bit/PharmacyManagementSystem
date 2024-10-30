// // // // PurchasePage.jsx
// // import React, { useState } from 'react';
// // import MedicineSearch from './MedicineSearch';
// // import { useNavigate } from 'react-router-dom';
// // import './PurchasePage.css';

// // export default function PurchasePage() {
// //     const [cart, setCart] = useState([]);
// //     const navigate = useNavigate();

// //     const handleAddToCart = (medicine) => {
// //         setCart((prevCart) => [...prevCart, medicine]);
// //     };

// //     const calculateTotalAmount = () => {
// //         return cart.reduce((total, item) => total + item.price, 0);
// //     };

// //     const handlePlaceOrder = () => {
// //         const orderDetails = {
// //             name: "User Name", // Replace with user's name
// //             email: "user@example.com", // Replace with user's email
// //             phone: "1234567890", // Replace with user's phone number
// //             cartItems: cart,
// //             totalAmount: calculateTotalAmount(),
// //         };
// //         // Pass order details to OrderSummary via navigate
// //         navigate('/order-summary', { state: { orderDetails } });
// //     };

// //     return (
// //         <div className="purchase-page">
// //             <h1>Purchase Medicines</h1>
// //             <MedicineSearch onAddToCart={handleAddToCart} />
// //             <div className="cart-section">
// //                 <h2>Your Cart</h2>
// //                 <ul>
// //                     {cart.map((item, index) => (
// //                         <li key={index} className="cart-item">
// //                             <span className="cart-item-name">{item.name}</span>
// //                             <span className="cart-item-price">${item.price}</span>
// //                         </li>
// //                     ))}
// //                 </ul>
// //                 <div className="total-amount">
// //                     Total: ${calculateTotalAmount()}
// //                 </div>
// //                 <button onClick={handlePlaceOrder} className="place-order-btn">
// //                     Place Order
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // }
// import React, { useState, useContext } from 'react';
// import MedicineSearch from './MedicineSearch';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext'; // Import AuthContext
// import './PurchasePage.css';

// export default function PurchasePage() {
//     const [cart, setCart] = useState([]);
//     const { currentUser } = useContext(AuthContext); // Access user details from AuthContext
//     const navigate = useNavigate();

//     const handleAddToCart = (medicine) => {
//         setCart((prevCart) => [...prevCart, medicine]);
//     };

//     const calculateTotalAmount = () => {
//         return cart.reduce((total, item) => total + item.price, 0);
//     };

//     const handlePlaceOrder = () => {
//         const orderDetails = {
//             name: currentUser.name, // Use user's name from AuthContext
//             email: currentUser.email, // Use user's email from AuthContext
//             phone: currentUser.phone, // Use user's phone from AuthContext
//             cartItems: cart,
//             totalAmount: calculateTotalAmount(),
//         };
        
//         // Pass order details to OrderSummary via navigate
//         navigate('/order-summary', { state: { orderDetails } });
//     };

//     return (
//         <div className="purchase-page">
//             <h1>Purchase Medicines</h1>
//             <MedicineSearch onAddToCart={handleAddToCart} />
//             <div className="cart-section">
//                 <h2>Your Cart</h2>
//                 <ul>
//                     {cart.map((item, index) => (
//                         <li key={index} className="cart-item">
//                             <span className="cart-item-name">{item.name}</span>
//                             <span className="cart-item-price">${item.price}</span>
//                         </li>
//                     ))}
//                 </ul>
//                 <div className="total-amount">
//                     Total: ${calculateTotalAmount()}
//                 </div>
//                 <button onClick={handlePlaceOrder} className="place-order-btn">
//                     Place Order
//                 </button>
//             </div>
//         </div>
//     );
// }
import React, { useState, useContext } from 'react';
import MedicineSearch from './MedicineSearch';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import axios from 'axios'; // Import axios
import './PurchasePage.css';
 function PurchasePage() {
    const [cart, setCart] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToCart = (medicine) => {
        setCart((prevCart) => [...prevCart, medicine]);
    };

    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    const handlePlaceOrder = async () => {
        const orderDetails = {
            name: currentUser?.name || "Madhu", // Use user's name from AuthContext
            email: currentUser?.email || "guest@example.com", // Use user's email from AuthContext
            phone: currentUser?.phone || "0000000000", // Use user's phone from AuthContext
            cartItems: cart,
            totalAmount: calculateTotalAmount(),
        };

        try {
            // Save order to db.json using axios
            await axios.post('http://localhost:3001/orders', orderDetails);

            // Navigate to OrderSummary page with order details
            
        } catch (error) {
            console.error("Error placing order:", error);
        }
        navigate('/order-summary', { state: { orderDetails } });
    };

    return (
        <div className="purchase-page">
            <h1 style={{color:'white'}}>Purchase Medicines</h1>
            <MedicineSearch onAddToCart={handleAddToCart} />
            <div className="cart-section">
                <h2 style={{color:'white'}}>Your Cart</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            <span className="cart-item-name">{item.name}</span>
                            <span className="cart-item-price">${item.price}</span>
                        </li>
                    ))}
                </ul>
                <div className="total-amount" style={{color:'white'}} >
                    Total: ${calculateTotalAmount()}
                </div>
                <button onClick={handlePlaceOrder} className="place-order-btn">
                    Place Order
                </button>
            </div>
        </div>
    );
}
export default PurchasePage

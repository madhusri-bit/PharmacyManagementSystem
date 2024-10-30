// // // // OrderSummary.jsx
// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';

// // // export default function OrderSummary({ cart, onOrderSubmit }) {
// // //     const [total, setTotal] = useState(0);

// // //     useEffect(() => {
// // //         const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
// // //         setTotal(newTotal);
// // //     }, [cart]);

// // //     const handleOrderSubmit = () => {
// // //         axios.post('http://localhost:3001/orders', { items: cart, totalAmount: total })
// // //             .then(response => {
// // //                 console.log('Order placed successfully!', response.data);
// // //                 onOrderSubmit();  // Reset the cart or navigate to another page
// // //             })
// // //             .catch(error => console.error('Error placing order:', error));
// // //     };

// // //     return (
// // //         <div>
// // //             <h2>Order Summary</h2>
// // //             <ul>
// // //                 {cart.map((item) => (
// // //                     <li key={item.id}>
// // //                         {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
// // //                     </li>
// // //                 ))}
// // //             </ul>
// // //             <h3>Total: ${total}</h3>
// // //             <button onClick={handleOrderSubmit}>Place Order</button>
// // //         </div>
// // //     );
// // // }
// // // OrderSummary.jsx
// // import React from 'react';
// // import { useLocation } from 'react-router-dom';
// // import './OrderSummary.css';

// // export default function OrderSummary() {
// //     const location = useLocation();
// //     const { orderDetails } = location.state || {};

// //     return (
// //         <div className="order-summary">
// //             <h1>Order Summary</h1>
// //             <div className="order-details">
// //                 <p><strong>Name:</strong> {orderDetails?.name}</p>
// //                 <p><strong>Email:</strong> {orderDetails?.email}</p>
// //                 <p><strong>Phone:</strong> {orderDetails?.phone}</p>
// //             </div>
// //             <div className="cart-items">
// //                 <h2>Items Purchased:</h2>
// //                 <ul>
// //                     {orderDetails?.cartItems.map((item, index) => (
// //                         <li key={index}>
// //                             {item.name} - ${item.price}
// //                         </li>
// //                     ))}
// //                 </ul>
// //             </div>
// //             <div className="total-amount">
// //                 <strong>Total Amount:</strong> ${orderDetails?.totalAmount}
// //             </div>
// //         </div>
// //     );
// // }
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './OrderSummary.css';

// export default function OrderSummary() {
//     const location = useLocation();
//     const { orderDetails } = location.state || {};

//     if (!orderDetails) {
//         return <p>No order details available.</p>;
//     }

//     return (
//         <div className="order-summary">
//             <h1>Order Summary</h1>
//             <div className="user-details">
//                 <p><strong>Name:</strong> {orderDetails.name}</p>
//                 <p><strong>Email:</strong> {orderDetails.email}</p>
//                 <p><strong>Phone:</strong> {orderDetails.phone}</p>
//             </div>
//             <div className="order-details">
//                 <h2>Items Ordered:</h2>
//                 <ul>
//                     {orderDetails.cartItems.map((item, index) => (
//                         <li key={index}>
//                             {item.name} - ${item.price}
//                         </li>
//                     ))}
//                 </ul>
//                 <div className="total-amount">
//                     <strong>Total Amount:</strong> ${orderDetails.totalAmount}
//                 </div>
//             </div>
//         </div>
//     );
// }
import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderSummary.css';

 function OrderSummary() {
    const location = useLocation();
    const { orderDetails } = location.state || {};

    if (!orderDetails) {
        return <p>No order details available.</p>;
    }

    return (
        <div className="order-summary">
            <h1>Order Summary</h1>
            <div className="user-details">
                <p><strong>Name:</strong> {orderDetails.name}</p>
                <p><strong>Email:</strong> {orderDetails.email}</p>
                <p><strong>Phone:</strong> {orderDetails.phone}</p>
            </div>
            <div className="order-details">
                <h2>Items Ordered:</h2>
                <ul>
                    {orderDetails.cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
                <div className="total-amount">
                    <strong>Total Amount:</strong> ${orderDetails.totalAmount}
                </div>
            </div>
        </div>
    );
}
export default OrderSummary;


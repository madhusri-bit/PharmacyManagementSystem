// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Home from "./component/Home";
// import FeaturesPage from "./component/FeaturesPage";
// import About from "./component/About";
// import FeedbackPage from "./component/FeedbackPage";
// import Login from "./component/Login";
// import Signup from "./component/Signup";
// import Profile from "./component/Profile";

// function App() {
//   return (
    
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/features" element={<FeaturesPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/feedback" element={<FeedbackPage />} />
//         <Route path="/contact" element={<About />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/prof" element={<Profile />} />
//         <Route  path="/order" element={currentUser ?}/>
//       </Routes>
//     </Router>
    
//   );
// }

// export default App;
// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import Home from './Home';
// import Profile from './Profile';
// import OrderManagement from './OrderManagement';
// import PurchasePage from './PurchasePage';
// import OrderConfirmation from './OrderConfirmation'; // Import the OrderConfirmation component
// import { AuthContext } from './AuthContext';

// const App = () => {
//   const { currentUser } = useContext(AuthContext); // Access currentUser

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/prof" element={<Profile />} />
//         <Route 
//           path="/order" 
//           element={currentUser ? <PurchasePage /> : <Navigate to="/login" />} // Protected route for PurchasePage
//         />
//         <Route 
//           path="/order-confirmation" 
//           element={currentUser ? <OrderConfirmation /> : <Navigate to="/login" />} // Protected route for OrderConfirmation
//         />
//         <Route 
//           path="/home" 
//           element={currentUser ? <Home /> : <Navigate to="/login" />} // Protected route for Home
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from './AuthContext';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Profile from './component/Profile';
import PurchasePage from './PurchasePage';
import OrderSummary from './OrderSummary';
import OrderConfirmation from './OrderConfirmation';
import About from './component/About';
import FeaturesPage from './component/FeaturesPage';
import FeedbackPage from './component/FeedbackPage';

const App = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/prof" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/contact" element={<About />} />
        <Route path="/order" element={currentUser ? <PurchasePage /> : <Navigate to="/login" />} />
         <Route 
          path="/order-confirmation" 
           element={currentUser ? <OrderConfirmation /> : <Navigate to="/login" />} // Protected route for OrderConfirmation
         /> 
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // Use currentUser instead of user

  const loginUser = (userData) => {
    setCurrentUser(userData); // Update to setCurrentUser
  };

  const logoutUser = () => {
    setCurrentUser(null); // Clear the currentUser on logout
  };

  return (
    <AuthContext.Provider value={{ currentUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

 export default AuthProvider;
// import React, { createContext, useState } from 'react';

// // Create a new AuthContext
// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null); // Track the current logged-in user

//   // Function to log in a user and set their data in state
//   const loginUser = (userData) => {
//     setCurrentUser(userData); // Update the state with the user's data
//   };

//   // Function to log out a user
//   const logoutUser = () => {
//     setCurrentUser(null); // Clear the user data when logging out
//   };

//   return (
//     // Provide currentUser, loginUser, and logoutUser to any components that consume AuthContext
//     <AuthContext.Provider value={{ currentUser, loginUser, logoutUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

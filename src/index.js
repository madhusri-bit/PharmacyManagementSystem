import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Redux Provider
import App from './App';
import AuthProvider from './AuthContext'; // Make sure this path is correct
import store from './redux/store'; // Adjust the path to your store file

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}> {/* Wrap with Redux Provider */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>
);

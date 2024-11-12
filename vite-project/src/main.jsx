import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for components like modals, tooltips, etc.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Pages/Cart/cartContext'; // Updated path for CartProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/* Wrap App with CartProvider */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);

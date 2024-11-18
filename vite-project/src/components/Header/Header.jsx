import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header d-flex flex-column align-items-start justify-content-center text-white">
      <div className="content p-3">
        <h1>Good Things Are Cooking, Stay Hungry!</h1>
        {/* Paragraph hidden on small screens */}
        <p className="d-none d-md-block">
        Great things take time, and we’re crafting your meal with love and care. Hang tight—your delicious, hot meal will be ready before you know it!
        </p>
        <button className="btn btn-primary d-none d-md-block">View Menu</button>
      </div>
    </div>
  );
};

export default Header;

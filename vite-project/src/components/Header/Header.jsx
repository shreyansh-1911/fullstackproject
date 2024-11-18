import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header d-flex flex-column align-items-start justify-content-center text-white">
      <div className="content p-3">
        <h1>Order here please</h1>
        {/* Paragraph hidden on small screens */}
        <p className="d-none d-md-block">
          ntium amet natus rerum minima ad voluptate hic deleniti provident porro tempore, consectetur expedita non!
          Praesentium ipsum libero quae fugiat sunt similique esse odio? Mollitia similique iusto dolor, nemo doloribus
          reiciendis corporis facilis.
        </p>
        <button className="btn btn-primary">View Menu</button>
      </div>
    </div>
  );
};

export default Header;

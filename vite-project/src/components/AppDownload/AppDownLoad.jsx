import React from 'react';
import { assets } from '../../assets/assets';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppDownLoad.css'; // Custom CSS file for hover effect

const AppDownLoad = () => {
  return (
    <div className="app-download text-center py-5" id="app-download">
      <div className="container">
        <h2 className="mb-4">For a Better Experience</h2>
        <p className="fs-5">Download the <strong>Tomato App</strong> now!</p>
        <div className="app-download-platforms d-flex justify-content-center gap-4 mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={assets.play_store}
              alt="Download from Play Store"
              className="store-icon"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={assets.app_store}
              alt="Download from App Store"
              className="store-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDownLoad;

import React from "react";

import './Header.css'

import { HiMenuAlt2, HiSearch } from 'react-icons/hi'
import { MdLocationPin } from 'react-icons/md'

const Header = () => {
  return (
    <>
      <div className="container">
            <div className="header-buttons">
                <button><HiMenuAlt2/></button>
                <button><HiSearch/></button>
            </div>
            <div className="header">
                <div className="logo"></div>
                <div className="description">
                    <h1>Cheddar House</h1>
                    <h3><MdLocationPin/>Av. Joelson Silva, 5512</h3>
                    <div className="status-container">
                        <span>Aberto até ás 22:00</span>
                    </div>
                </div>
            </div>
      </div>
    </>
  );
};

export default Header;

import React, { useState } from 'react';
import './CommunitiesDropdown.css';

const CommunitiesDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [communities, setCommunities] = useState([])



  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value.toUpperCase());
  };




  return (
    <>
      <div className="dropdown" onClick={(e) => e.stopPropagation()}>
        <button onClick={toggleDropdown} className="dropbtn">
          Choose a community
        </button>
        <div id="myDropdown" className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>

          


          {/* <p href="#about">About</p>
              <p href="#base">Base</p>
              <p href="#blog">Blog</p>
              <p href="#contact">Contact</p>
              <p href="#custom">Custom</p>
              <p href="#support">Support</p>
              <p href="#tools">Tools</p> */}
        </div>
      </div>
    </>
  );
};

export default CommunitiesDropdown;

import React, { useEffect, useState } from 'react'
import './CommunitiesDropdown.css'
import api from "../api"

const CategoriesDropdown = ({ selectedCategory, setSelectedCategory }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [categories, setCategories] = useState()
  const [showCategory, setShowCategory] = useState(false)

  useEffect(() => {
    listCategories()
  }, [])


  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  // const handleFilterChange = (event) => {
  //   setFilterText(event.target.value.toUpperCase());
  // };


  const listCategories = () => {
    const list = ["Gaming", "Sports", "Entertainment", "Business", "Education", "Politics", "Technology", "Lifestyle"]

    setCategories(list)

  };



  return (
    <>
      {
        showCategory ?
          <div className="dropdown" onClick={(e) => e.stopPropagation()}>
            <button  className="dropbtn" onClick={()=>{setShowCategory(false); toggleDropdown()}} style={{height :"4px", display: "flex" , alignItems: "center", margin: "1vh"}}>
              {selectedCategory}
            </button>
          </div>
          :
          <div className="dropdown" onClick={(e) => e.stopPropagation()}>
            <button onClick={toggleDropdown} className="dropbtn" style={{height :"4px", display: "flex" , alignItems: "center", margin: "1vh"}} >
              Choose a Category
            </button>
            <div id="myDropdown" className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>

              {
                categories ?
                  categories.map((cat, key) => {
                    return (
                      <span key={key}>
                        <p onClick={(e) => { setSelectedCategory(cat); toggleDropdown(e); setShowCategory(true) }}>{cat}</p>
                      </span>
                    )
                  }) :
                  <p>Loading.....</p>
              }

            </div>
          </div>
      }

    </>
  );
};

export default CategoriesDropdown;

import React, { useEffect, useState } from 'react'
import './CommunitiesDropdown.css'
import api from "../api"

const CommunitiesDropdown = ({ selectedCommunity, setSelectedCommunity }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [communities, setCommunities] = useState()
  const [showCommunity, setShowCommunity] = useState(false)

  useEffect(() => {
    listCommunities()
  }, [])


  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value.toUpperCase());
  };


  const listCommunities = () => {
    api.get("/subreddit/subreddit")
      .then((res) => { console.log(res); setCommunities(res.data) })
      .catch((err) => { })
  };



  return (
    <>
      {
        showCommunity ?
          <div className="dropdown" onClick={(e) => e.stopPropagation()}>
            <button onClick={toggleDropdown} className="dropbtn" onClick={()=>setShowCommunity(false)}>
              {selectedCommunity}
            </button>
          </div>
          :
          <div className="dropdown" onClick={(e) => e.stopPropagation()}>
            <button onClick={toggleDropdown} className="dropbtn">
              Choose a community
            </button>
            <div id="myDropdown" className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>

              {
                communities ?
                  communities.map((com, key) => {
                    return (
                      <>
                        <p onClick={(e) => { setSelectedCommunity(com.name); toggleDropdown(e); setShowCommunity(true) }}>{com.name}</p>
                      </>
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

export default CommunitiesDropdown;

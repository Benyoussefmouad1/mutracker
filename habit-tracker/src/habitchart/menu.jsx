import React from 'react';
import { useState } from 'react';
import './csschart.css';
import { Link, useNavigate } from "react-router-dom";
import { TbProgressCheck } from "react-icons/tb";
import styled from 'styled-components';

const StyledLink = styled(Link)`
      text-decoration : none;
      color : white;
    ` 

export default function Menu(){

    const [isOpen, setIsOpen] = useState(false);
    
      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };

      const navigate = useNavigate();

      const navigateToTracker = () => {
        navigate("/habit-chart")
      }
    return(
        <nav>
                <div>
                  <button className="menu-icon" onClick={toggleSidebar}>
                    &#9776;
                  </button>
                </div>
        
                <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                  <ul>
                    <li><StyledLink to='/'>HOME</StyledLink></li>
                    <li><StyledLink to='/habitform'>ADD CHART</StyledLink></li>
                    <li><StyledLink to='/habits'>HABITS</StyledLink></li>
                    <li><StyledLink to='/habit-chart'>TRACKER</StyledLink></li>
                  </ul>
                </div>
        
                {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        
        
                <div><TbProgressCheck className="menuicon" onClick={navigateToTracker}/></div>
              </nav>
    )
}
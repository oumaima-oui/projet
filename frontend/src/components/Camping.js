import React from 'react'
import Footer from './Footer'
import {
  MDBIcon,
  MDBBtn
}from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Camping = () => {
  const navigate = useNavigate();

  return (
   <div>
     <MDBBtn
        tag="a"
        color="none"
        style={{ float: "left", color: "#000" , padding:"15px"}}
        onClick={() => navigate("/")}
      >
      <MDBIcon
          fas
          size="lg"
          icon="long-arrow-alt-left"
          style={{ float: "left" }}
      />
      </MDBBtn>
     <div className='Camping'>
        <div className='image'>
            <img src='https://www.tourmag.com/photo/art/grande/63205891-45615337.jpg?v=1647950749'alt='' width="750px"/>
        </div>
        <div className='content'>
            <h3>Our Camp</h3>
            <p>While camping, you will likely explore new surrounds and keep active. This increased exercise has been well-documented – from the Heart Foundation to the Department of Health 
             as having myriad physical and mental benefits. These include combatting health problems and disease and improving your mood and energy levels.
            </p>
        </div>
        <Footer />
    </div>
   </div>
  )
}

export default Camping
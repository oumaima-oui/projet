import React from 'react';
import {
  MDBIcon,
  MDBBtn
}from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

import Footer from './Footer';

const Guide = () => {
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
      <div className='guide'>
        <div className='image'>
            <img src='https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg?w=2000'alt=''width="460"/>
        </div>
        <div className='content'>
          <h3>Liv Morge</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standasrd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='image'>
            <img src='https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?cs=srgb&dl=pexels-pixabay-38554.jpg&fm=jpg'alt='' width="460"/>
        </div>
        <div className='content'>
          <h3>Baily jastons</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Guide;
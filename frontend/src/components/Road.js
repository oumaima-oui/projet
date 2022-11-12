import React from 'react';
import {
  MDBIcon,
  MDBBtn
}from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

import Footer from './Footer';

const Road = () => {
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
      <div className='road'>
        <div className='image'>
            <img src='https://play-lh.googleusercontent.com/Ca-vfAUx3vJ7H3_tu7A01mvEe8yhqmNoFVbFMR-Te94eJRVW-NyG74T7aXlol1__Ins'alt=''/>
        </div>
        <div className='content'>
          <h3>Road Off</h3>
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

export default Road;
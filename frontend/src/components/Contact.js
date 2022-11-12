import React from 'react';
import {
    MailOutline,
    Phone,
} from "@material-ui/icons";
import {
  MDBIcon,
  MDBBtn
}from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

import Footer from './Footer';

const Contact = () => {
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
      <div className='contact'>
        <div className='image'>
            <img src='https://www.designrush.com/uploads/users/customer-11/image_1530667878_gQ0EfQfL9GHKYrCdjsUuKRjzTU2JwMZYKso6vcpp.jpeg'alt=''/>
        </div>
        <div className='content'>
          <h3 href='/contact'>Contact us</h3>
            <p>You can contact is 24/24 hour in our email or phone</p>
            <MailOutline style={{color:"black",fontSize:"25px",justifyContent:"center",textAlign:'center'}} /> contact TourApp@gmail.com
            <br/>
            <Phone style={{color:"black",fontSize:"25px",justifyContent:"center",textAlign:'center'}}/> +31 234 56 78  
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Contact;
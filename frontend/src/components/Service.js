import React from 'react';
import {Link} from "react-router-dom";

const Service = () => {
return (
    <div className='service'>
        <h1 className='heading-title'>Our Service</h1>
        <div className='box-container'>
            <div className='box'>
                <img src='https://thumbs.dreamstime.com/b/adventure-logo-design-black-white-vintage-style-inspiration-174999419.jpg' alt=''/>
                <h3>adventure </h3>
                <Link to="/adventure" style={{backgroundColor:"white", fontSize:"15px", color:'black',padding:"15px 15px",boxRaduis:"5px",cursor:"pointer" }}>Read More</Link>
            </div>
            <div className='box'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzI2U__V5kpmrT6ZcJGkMyghdNKyCLWHdhXaIrlyyaYN3aL_2equMPSbio2MPo9HfIIo4&usqp=CAU" alt=''/>
                <h3>Camping</h3>
                <Link to="/camping" style={{backgroundColor:"white", fontSize:"15px", color:'black',padding:"15px 15px",boxRaduis:"5px",cursor:"pointer" }}>Read More</Link>
            </div>
            <div className='box'>
                <img src='https://www.kindpng.com/picc/m/94-941756_off-roading-icon-off-road-hd-png-download.png' alt=''/>
                <h3>Off road</h3>
                <Link to="/road" style={{backgroundColor:"white", fontSize:"15px", color:'black',padding:"15px 15px",boxRaduis:"5px",cursor:"pointer" }}>Read More</Link>
            </div>
            <div className='box'>
                <img src='https://cdn5.vectorstock.com/i/1000x1000/82/64/tour-guide-icon-sign-o-vector-18128264.jpg' alt=''/>
                <h3>Tour guide</h3>
                <Link to="/guide" style={{backgroundColor:"white", fontSize:"15px", color:'black',padding:"15px 15px",boxRaduis:"15px",cursor:"pointer" }}>Read More</Link>
            </div>
            <div className='box'>
                <img src='https://www.kindpng.com/picc/m/156-1568226_transparent-contact-icon-png-contact-us-icon-png.png' alt=''/>
                <h3>contact Us</h3>
                <Link to="/contact" style={{backgroundColor:"white", fontSize:"15px", color:'black',padding:"15px 15px",boxRaduis:"5px",cursor:"pointer" }}>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default Service
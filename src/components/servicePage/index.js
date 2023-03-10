import React from "react";
import PolishedService from "../../assets/images/PolishedService.jpeg"
import { Container } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';

const ServicesPage = ({handleClick}) => {
  return (
    <React.Fragment>
    <CssBaseline />
    <section >
    <Container id="ServicePage" maxWidth='xxl'>
    <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", marginTop: "5%" }}>
      <div className="servicePageMobile" style={{ flex: 1, padding: "10px", marginLeft: "250px" }}>
      <div className="servicePageTop" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="headerRow" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", paddingRight: "30%" }}>
            <h2 className="cursiveh2 headerBigLetter" style={{ fontSize: "8rem", fontStyle: "italic", fontFamily: "cursiveFont", fontWeight: "lighter", margin: "0", lineHeight: "2.6rem", paddingBottom: "40px", marginRight: "5px" }}>S</h2>
            <h2 className="cursiveh2 cursiveMobile" style={{ fontSize: "6rem", fontFamily: "cursiveFont", fontStyle: "italic", fontWeight: "lighter", lineHeight: "2.6rem" }}>ervices</h2>
          </div>
          <p style={{  fontFamily: "regularFont", marginTop: "-30px", width: "100%", lineHeight: "1.6rem", fontSize: "20px", letterSpacing: ".05em", color: "#706d6d" }}>
            We offer a wide range of event services, including but not limited to: </p>      
            <div className="servicePageListContainer" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%", paddingRight: "15%"  }}>
            <ul className="serviceListItems" style={{ flex: 1, padding: "px",  }}>
            <li style={{ fontSize: ".9rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Baby Showers</li>
              <li style={{ fontSize: ".9rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Baptisms</li>
              <li style={{ fontSize: ".9rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Birthdays</li>
              <li style={{ fontSize: ".9rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Bridal Showers</li>  
            </ul>
            <ul className="serviceListItems" style={{ flex: 1, padding: "5px", marginRight: "3%" }}>
            <li style={{ fontSize: ".9rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Communions</li>
            <li style={{ fontSize: ".9rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Corporate Events</li>
            <li style={{ fontSize: ".9rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Day of Coordinating</li>
            <li style={{ fontSize: ".9rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Engagement Parties</li>

            </ul>
            <ul className="serviceListItems" style={{ flex: 1, padding: "5px" }}>
            <li style={{ fontSize: ".9rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Fundraisers</li>
            <li style={{ fontSize: ".9rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Graduation</li>
              <li style={{ fontSize: ".9rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Sweet Sixteen</li>
              <li style={{ fontSize: ".9rem", fontFamily: "regularFont", marginTop: "0", width: "120%", lineHeight: "1.6rem", paddingBottom: "10px", letterSpacing: ".05em", color: "#706d6d" }}>Wedding</li>
            </ul>
          </div>
          
        </div>
        <button style={{ 
  fontSize: "1rem", 
  textAlign: "center", 
  fontFamily: "regularFont", 
  lineHeight: "1.6rem", 
  letterSpacing: ".05em",  
  color: "#706d6d",
  display: "flex",
  justifyContent: "center",
  border: "1px solid black",
  borderRadius: "5px",
  margin: "auto",
  width: "fit-content",
  paddingBottom: "3px",
  paddingRight: "5px",
  paddingLeft: "5px",
  marginLeft: "29%"
}} 
onClick={() => { handleClick('Gallery');}}
>
  View More   
</button>
      </div>
      <div className="my-cool-item" style={{ flex: 1, padding: "10px" }}>
        <img src={PolishedService} alt="event planning" style={{ width: "55%", boxShadow: "80px -60px 0px 0 #C3A6A0" }} />
      </div>
    </div>
    </Container>
    </section>
  </React.Fragment>
    
  );
};

export default ServicesPage;
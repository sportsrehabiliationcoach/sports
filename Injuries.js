import React from 'react';
import { Link } from 'react-router-dom';


const containerStyle = {
  backgroundColor: "white",
  width:'100%',
  boxSizing:"border-box",
}
const container2Styles = {
  display: "flex",
  flexDirection: "row",
  width:'100%',
  boxSizing:"border-box",
}
const leftStlyes = {
  flex: 1,
  alignItems: "left",
  paddingLeft: "30px",
}
const rightStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: "30px",
  flex:'1',
}

const h1Style = {
  paddingTop: "55px",
  paddingBottom: '30px',
  color: 'black',
  fontFamily: "Times New Roman, Times, serif",
  fontSize: "40px",
  fontWeight: "bold",
  // textAlign:"center",

}

const pStyle = {
  fontFamily: "Times New Roman, Times, serif",
  fontSize: "20px",
  fontWeight: "medium",
  color:'white',
  textAlign: "center",

}
const carouselStyle = {
  background: 'url("https://images.unsplash.com/photo-1567019001814-57350903e2af?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
//  backgroundRepeat: 'no-repeat',
  width: "100%",
  height: "480px",
  justifyContent: "center",
  alignContent: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "50px 0",
  
}

const btnStyle = {
  border: "2px solid white",
  color: "black",
  fontWeight: "medium",
  backgroundColor: "white",
  textAlign: "center",
  paddingTop: "12px",
  textDecoration: 'none',
  paddingBottom: "12px",
  fontSize: "17px"

}

function Services() {
  return (
    <div className="container" style={containerStyle}>
      <div className="container 2" style={container2Styles}>
        <div className="left" style={leftStlyes}>
          <h1>gbhnj</h1>
          <h1>Sports Rehab</h1>



        </div>
        <div className="right" style={rightStyles}>


          <p style={{paddingTop: '75px'}}>Feel free to reach us at <a href='mailto:sportsrehab04@gmail.com'>sportsrehab04@gmail.com</a></p>

        </div>
      </div>
      <div style = {{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="carousel" style={carouselStyle}>
          <h1 style={h1Style}>  The road to Recovery will
            <br />
            not always be easy, but we will

            <br />
            take it one step at a time!

          </h1>

          <p style={pStyle}> We provide various remedies for injuries and provide beneficial
            <br />
            exercises to help people recover soon!
          </p>

          <br />
          <br />
          <br />

          <Link to="/exercises">
            <button className="btn" style={btnStyle}>Get Started</button>
          </Link>

          <br />
          

          



        </div>
      </div>
    </div>
  )




};
export default Services;

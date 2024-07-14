import React from 'react';
import { Link } from 'react-router-dom';

 const containerStyle = {
  backgroundColor:"white",
 }
const container2Styles = {
  display:"flex",
  flexDirection:"row",
  
}
const leftStlyes = {
  flex: 1,
  alignItems:"left",
  paddingLeft:"30px",
}
const rightStyles = {
  display: "flex",
  alignItems: "center", 
  justifyContent: "flex-end", 
  paddingRight: "30px",
}

const h1Style = {
  paddingTop:"75px",
  fontFamily:"Times New Roman, Times, serif",
  fontSize:"40px",
  fontWeight:"bold",
  textAlign:"center",
  
}

const pStyle = {
  fontFamily:"Times New Roman, Times, serif",
  fontSize:"20px",
  fontWeight:"medium",
  textAlign:"center",
  
}
const carouselStyle = {
  background: 'url("https://plus.unsplash.com/premium_photo-1663013420957-cfbeeeaa311d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
  width: "100%",
  height:"100%",
  justifyContent: "center",
  alignContent: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "50px 0",
}

const btnStyle = {
  border:"2px solid violet",
  borderRadius:"10%",
  color:"black",
  fontWeight:"medium",
  backgroundColor:"violet",
  textAlign:"center",
  paddingTop:"12px",
  textDecoration:"none",
  paddingBottom:"12px",
  fontSize:"17px"

}
const svgStyle = {
  paddingTop:"75px",
  
}







function Services() {
  return (
    <div className="container" style = {containerStyle}>
      <div className="container 2" style = {container2Styles}>
        <div className="left" style = {leftStlyes}>
          <h1>gbhnj</h1>
          <h1>Sports Rehab</h1>
          


        </div>
        <div className="right" style ={rightStyles}>
          <svg style = {svgStyle} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="success"  class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
          
          <p style = {svgStyle}>(+91)26700024567</p>

        </div>
      </div>
      <div className = "carousel" style = {carouselStyle}>
         <h1 style = {h1Style}>  The road to Recovery will
          <br/>
          not always be easy, but we will
          
          <br/>
          take it one step at a time!
               
         </h1>

         <p style = {pStyle}> We provide various remedies for injuries and provide beneficial
          <br/>
          exercises to help people recover soon!
         </p>

         <br/>
         <br/>
         <br/>

         <Link to="/exercises">
          <button className="btn" style={btnStyle}>Get Started</button>
        </Link>

         
         
      </div>

    </div>
  )




};
export default Services;

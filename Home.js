import React from 'react'
import  "./Home.css"


const divstyles = {
    paddingTop:"75px",
}
const headerStyles = {
    color: "rgb(8, 8, 29)",
    fontFamily: "Times New Roman', Times, serif",
    fontSize:"50px",
    paddingTop:"30px",
    fontWeight: "bolder",
    textAlign: "center",
}

const pStyle = {
    color:"rgb(8, 8, 29)",
    fontFamily: "Times New Roman', Times, serif",
    fontSize: "30px",
    textAlign: "center",
}




function Home(){
    return(
        
        <div style = {divstyles}>
           <header style = {headerStyles}>Welcome to rehabilitation website</header>
           <p style = {pStyle}>Your 24/7 recovery for sports injuries recovery!</p>
        
        </div>
        
    )
}


export default Home;
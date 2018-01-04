import React, { Component } from 'react';

class About extends Component {
    render() {
      return (
          
<div className="about">
<p style={{"color":"white", "font-size":"33px", "text-align":"center", "font-family": "Arial, Helvetica, sans-serif", "padding-top":"40px"}}>About Us</p>
<p style={{"color":"white", "font-size":"18px", "text-align":"center"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
<div className="images">
    <div className="img2">
        <img src="images/img2.jpg" alt="img"/>
      <div className="p">
            <p style={{"color":"black", "font-family": "Arial, Helvetica, sans-serif", "text-align":"center"}}>Lorem Ipsum is Simply</p>
            <p style={{"font-style":"oblique", "text-align":"center"}}>project manager</p>
            <p style={{"text-align":"center"}}>Lorem Ipsum is simply <br/>dummy text of the printing <br/>and typesetting industry. <br/>Lorem Ipsum has been the <br/>industry's standard dummy <br/>text ever since the 1500s.</p>
      </div>
    </div>
    
    <div className="img1">
        <img src="images/img1.jpg" alt="img"/>
        <div className="q">
                <p style={{"color":"black", "font-family": "Arial, Helvetica, sans-serif", "text-align":"center"}}>Lorem Ipsum is Simply</p>
                <p style={{"font-style":"oblique", "text-align":"center"}}>project manager</p>
                <p style={{"text-align":"center"}}>Lorem Ipsum is simply <br/>dummy text of the printing <br/>and typesetting industry. <br/>Lorem Ipsum has been the <br/>industry's standard dummy <br/>text ever since the 1500s.</p>
            </div>
    </div>
   
    <div className="img3">
            <img src="images/img3.jpg" alt="img"/>
            <div className="r">
                    <p style={{"color":"black", "font-family": "Arial, Helvetica, sans-serif", "text-align":"center"}}>Lorem Ipsum is Simply</p>
                    <p style={{"font-style":"oblique", "text-align":"center"}}>project manager</p>
                    <p style={{"text-align":"center"}}>Lorem Ipsum is simply <br/>dummy text of the printing <br/>and typesetting industry. <br/>Lorem Ipsum has been the <br/>industry's standard dummy <br/>text ever since the 1500s.</p>   
                </div>
        </div>
        
</div>
</div>

);
}
}
export default About;
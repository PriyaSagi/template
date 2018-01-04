import React, { Component } from 'react';

class Contact extends Component {
    render() {
      return (
<div className="contact">
    <p style={{"text-align":"center", "font-size":"33px", "font-family": "Arial, Helvetica, sans-serif", "padding-top":"40px"}}>Contact Us</p>
    <p style={{"text-align":"center"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <div className="name">
        
  <div className="na">
    <form>
            <input type="text" name="name" placeholder="Your Name" style={{"padding-top":"10px", "padding-bottom":"10px", "padding-right":"170px"}} />
        
                <input type="text" name="email" placeholder="Your Email" style={{"padding-top":"10px", "padding-bottom":"10px", "padding-right":"170px"}}/>
                  
            </form>
            <form>
            <input type="text" name="name" placeholder="Your Message" style={{"padding-top":"10px", "padding-bottom":"240px", "padding-right":"510px"}} />
        </form>
        <button class="button" style={{"background":"#3cb371", "color":"white", "float":"right", "padding-top":"10px", "padding-bottom":"10px"}}>SUBMIT</button>
        </div>
        </div>
        </div>
    );
}
}
export default Contact;
import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
<header>
<div className="nav">
 <div className="logo">
<img src="images/logo.png" alt="image"/>
 </div>
 <div className="home">
<ul>
   <a href="/"><li>HOME</li></a>
   <a href="/information"><li>PORTFOLIO</li></a>
   <a href="/about"><li>ABOUT</li></a>
   <a href="/"><li>CONTACT</li></a>
</ul>
 </div>
   </div>
</header>
);
}
}
export default Header;

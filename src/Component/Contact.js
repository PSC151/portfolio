import React from "react";

function Contact(){
    return(
        <div id="info" className="container">
        <div id="top" className="contact">Contact</div>
          <hr/>
          <div id="name" className="name">Name</div>
            <input type="text"/> 
          <div id="email" className="email">Email</div>
            <input type="text"/>
          <div id="message" className="message">Message</div>
          <textarea id="text" rows="10" cols="75"></textarea>
          <br/>
          <button type="button">Submit</button>
          <br/>
          <div id="contact" className="contact">
            <ul>
              Email: Pchana11@hotmail.com
            </ul>
            <ul>
              GitHub: https://github.com/PSC151
            </ul>
          </div>
        </div>
    )
}

export default Contact;
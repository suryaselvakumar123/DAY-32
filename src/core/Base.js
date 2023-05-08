import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title , styles ,children}) {

    const history = useHistory();
    return(
     <div> 
        <div>
       
      <div className="nav-styles">
         <span>
            <button 
            className="nav-button"
            onClick={()=>history.push("/add/user")}
            >Add New Book</button>
         </span>
         <span>
            <button 
            className="nav-button"
            onClick={()=>history.push("/")}
            >Dashboard</button>
         </span>
         
       </div>
      <div className="title">{title}</div>
      </div>


      <div className="children"> 
      {children}
      
      <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <h4>About Us</h4>
        <p>
          Macallen Public Library is a digital library that offers a wide range of books to read online or download.
          Our mission is to provide quality reading material to everyone, regardless of their location or financial situation.
        </p>
      </div>
      <div className="col-sm-4">
        <h4>Contact Us</h4>
        <ul className="list-unstyled">
          <li><i className="fa fa-envelope"></i> Email: Macallen public library@gmail.com</li>
          <li><i className="fa fa-phone"></i> Phone: 987-910-1009</li>
          <li><i className="fa fa-map-marker"></i> Address: 123 Main St, Anytown, USA</li>
        </ul>
      </div>
      
    </div>
  </div>
</footer>

      
      
      </div>



     </div>
    )
}
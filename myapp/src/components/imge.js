import React from 'react'
import "./imge.css";
import im2 from "../images/background.jpg";
import ab from "../images/ab.png";
import slogan from "../images/slogan.png";
import {Link} from 'react-router-dom';
function img() {
  return (
    <div className="new">
    <div>
        <img className="im2" src={im2} alt="im2"/>
        <div className="content">
        <div className="imagess">
        <img className="ab" src={ab} alt="ab"/>
        <img className="slogan" src={slogan} alt="slogan"/>
        </div>
        <h1 className='slogan_heading'>Learn. Innovate. Inspire</h1>
        <Link to={"/signup"}>
        <button className='slogan_buttonnn'>Register</button>
          </Link>
        
        </div>
    </div>
</div>
  )
}

export default img
// import React from 'react'
// import './Signup.css'; 
// import im2 from "../images/background.jpg";

// const Signup = () => {
//   return (
//     <div>
//       <img className="im2" src={im2} alt="im2"/>
//     <div className='signup'>
//         <div className="centered-box_signup">
//       <div className="inner-box_signup">
//         {/* Your box content goes here */}
//         <div className="welcome_signup">   <h3>Welcome to Krushi Connect!</h3>
// </div>
//          {/* <div className="Signup-container">
//       <h2>Sign Up</h2> */}
//       <form>  
//       {/* onSubmit={handleSubmit} */}
//         <div className="form-group_signup">
//             <p>Username</p>
//           {/* <label htmlFor="username">Username</label> */}
//           <input className="username_signup"
//             type="text"
//             id="username"
//             name="username"
//             // value={formData.username}
//             // onChange={handleInputChange}
//             // required
//           />
//         </div>
//         <div className="form-group_signup">
//             <p>Password</p>
//           {/* <label htmlFor="password">Password</label> */}
//           <input className="password_signup"
//             type="password"
//             id="password"
//             name="password"
//             // value={formData.password}
//             // onChange={handleInputChange}
//             // required
//           />
//         </div>
//         <div className="a_signup"><button type="submit" className="submit_signup">Sign Up</button></div>
//         {/* <hr ></hr> */}
//         {/* <div className="line"> <p>Don't have an account?</p></div> */}
//         <div className="line_signup" style={{ display: "flex", alignItems: "center" }}>
//      <div style={{ flex: 1, backgroundColor: "#000000", height: "1px" }} />

//     <p style={{ margin: "0 10px" }}>Don't have an account?</p>

//     <div style={{ flex: 1, backgroundColor: "#000000", height: "1px" }} />
// </div>
//         <div class="b_signup"><button type="submit" className="create_signup">Create an Account</button></div>
//       </form>
//       </div>
//     </div>
//     </div>
//     </div>

//   )
// }
// export default Signup

import React from 'react'
import im2 from "../images/background.jpg";
import './Signup.css';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div>
      <div>
        <img className="im2" src={im2} alt="im2" />
        <div className="centered-box">
          <div className="inner-box">
            {/* Your box content goes here */}
            <div className="welcome_head">   <h3>Welcome to Krushi Connect!</h3>
            </div>

            {/* <div className="Signup-container">
      <h2>Sign Up</h2> */}
            <form >
              {/* onSubmit={handleSubmit} */}
              <div className="form-group">
                <b>Username</b>
                {/* <label htmlFor="username">Username</label> */}
                <input className="username"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                // value={formData.username}
                // onChange={handleInputChange}
                // required
                />
                {/* </div> */}
                {/* <div className="form-group"> */}
                <b>Password</b>
                {/* <label htmlFor="password">Password</label> */}
                <input className="password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                // value={formData.password}
                // onChange={handleInputChange}
                // required
                />
              </div>
              <div className='Sign_center'>
              <div class="a"><button type="submit" class="submit">Sign in</button></div>
              {/* <hr ></hr> */}
              {/* <div className="line"> <p>Don't have an account?</p></div> */}
              <div className="line" style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1, backgroundColor: "#000000", height: "1px" }} />

                <p style={{ margin: "0 10px" }}>Don't have an account?</p>

                <div style={{ flex: 1, backgroundColor: "#000000", height: "1px" }} />
              </div>
              <div class="b"><Link to={"/createaccount"}><button type="submit" className="create">Create an Account</button></Link></div>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Signup
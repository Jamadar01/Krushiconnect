import React from 'react'
import './Profile.css'; 
const Profile = () => {
  return (
    <div>
        <div className="centered-box-personal-info">
      <div className="inner-box-personal-info">
      <form >  
      {/* onSubmit={handleSubmit} */}
        <div className="form-group-personal-info">
          {/* <label htmlFor="username" style={{fontWeight: 'bold'}}>Product Name</label> */}
          <input class="name-personal-info"
            type="text"
            id="username"
            name="username"
            placeholder="Enter Full Name"
            // value={formData.username}
            // onChange={handleInputChange}
            // required
          />
        </div>
        <div className="form-group-personal-info">
          {/* <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Image</label> */}
          <input className="image-personal-info"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Mobile Number"
            // value={formData.password}
            // onChange={handleInputChange}
            // required
          />
        </div>

        <div className="form-group-personal-info">
            
            {/* <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Price</label> */}
            <input className="price-personal-info"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Email Address"
              // value={formData.password}
              // onChange={handleInputChange}
              // required
            />
          </div>

          <div className="form-group-personal-info">
            
            {/* <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Information</label> */}
            <input className="info-personal-info"
              type="password"
              id="password"
              name="password"
              placeholder="Enter PAN Card Number"
              // value={formData.password}
              // onChange={handleInputChange}
              // required
            />
          </div>
          <div className="form-group-personal-info">
            
            {/* <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Information</label> */}
            <input className="info-personal-info"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Address"
              // value={formData.password}
              // onChange={handleInputChange}
              // required
            />
          </div>

          <div className="form-group-personal-info">
            
            {/* <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Information</label> */}
            <input className="info-personal-info"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              // value={formData.password}
              // onChange={handleInputChange}
              // required
            />
          </div>

          <div className="a-personal-info"><button type="submit" className="submit-personal-info" style={{fontWeight: 'bold'}}>Save</button></div>
        
      </form>
      </div>
    </div>
    </div>
    
  )
}

export default Profile
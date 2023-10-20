import React from 'react'

const Productinfo = () => {

      return (
        <div>
            <div className="centered-box">
          <div className="inner-box">
          <form >  
          {/* onSubmit={handleSubmit} */}
            <div className="form-group">
              <label htmlFor="username" style={{fontWeight: 'bold'}}>Product Name</label>
              <input className="name"
                type="text"
                id="username"
                name="username"
                // value={formData.username}
                // onChange={handleInputChange}
                // required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Image</label>
              <input className="image"
                type="password"
                id="password"
                name="password"
                // value={formData.password}
                // onChange={handleInputChange}
                // required
              />
            </div>
    
            <div className="form-group">
                
                <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Price</label>
                <input className="price"
                  type="password"
                  id="password"
                  name="password"
                  // value={formData.password}
                  // onChange={handleInputChange}
                  // required
                />
              </div>
    
              <div className="form-group">
                
                <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Information</label>
                <input className="info"
                  type="password"
                  id="password"
                  name="password"
                  // value={formData.password}
                  // onChange={handleInputChange}
                  // required
                />
              </div>
    
              <div class="a"><button type="submit" class="submit" style={{fontWeight: 'bold'}}>Save Details</button></div>
            
          </form>
          </div>
        </div>
        </div>
        
      )
    }
    

export default Productinfo
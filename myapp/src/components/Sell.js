import React,{ useState, useEffect } from 'react'
import './Sell.css'; 
import im2 from "../images/background.jpg";
import axios from "axios"; 


const Sell = () => {

  const [sellDetails, setsellDetails] = useState([]);
  const [sell_name, setname] = useState('');
  const [sell_image, setimage] = useState('');
  const [sell_price, setprice] = useState('');
  const [sell_description, setdescription] = useState('');
  
  useEffect(() => {
    axios
      .get('http://localhost:8000/sell/')
      .then((res) => {
        const data = res.data;
        setsellDetails(data);
      })
      .catch((err) => {
        // Handle the error here
      });
  }, []);

  const handleInput = (e) => {
    if (e.target.name === 'sell_name') {
      setname(e.target.value);
    } else if (e.target.name === 'sell_image') {
      setimage(e.target.files[0]); // Capture the selected file
    } else if (e.target.name === 'sell_price') {
      setprice(e.target.value);
    } else if (e.target.name === 'sell_description') {
      setdescription(e.target.value);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('sell_name', sell_name);
    formData.append('sell_image', sell_image);
    formData.append('sell_price', sell_price);
    formData.append('sell_description', sell_description);
  
    axios
      .post('http://localhost:8000/sell/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      })
      .then((res) => {
        setname('');
        setimage('');
        setprice('');
        setdescription('');
        // Refresh the sellDetails after a new item is created
        axios
          .get('http://localhost:8000/sell/')
          .then((res) => {
            const data = res.data;
            setsellDetails(data);
          })
          .catch((err) => {
            // Handle the error here
          });
      })
      .catch((err) => {
        // Handle the error here
      });
  };


    
  return (
    <div>
      <img className="im2" src={im2} alt="im2"/>
        <div className="sell-head">
          
          <div className="centered-box-pinfo">
      <div className="inner-box-pinfo">
      <form onSubmit={handleSubmit}>  
      {/* onSubmit={handleSubmit} */}
        <div className="form-group-pinfo">
          <label htmlFor="username" style={{fontWeight: 'bold'}}>Product Name</label>
          <input className="name-pinfo"
            type="text"
            id="username"
            value={sell_name} name="sell_name"
							onChange={handleInput}
          />
        </div>
        <div className="form-group-pinfo">
          <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Image</label>
          <input className="image-pinfo"
            type="file"
            id="password"
             name="sell_image"
							onChange={handleInput}
          />
        </div>

        <div className="form-group-pinfo">
            
            <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Price</label>
            <input className="price-pinfo"
              type="text"
              id="password"
              value={sell_price} name="sell_price"
							onChange={handleInput}
            />
          </div>

          <div className="form-group-pinfo">
            
            <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Information</label>
            <input className="info-pinfo"
              type="text"
              id="password"
              value={sell_description} name="sell_description"
							onChange={handleInput}
            />
          </div>

          <div class="a-pinfo"><button type="submit" class="submit-pinfo">Save Details</button></div>
        
      </form>
      </div>
    </div></div>
    </div>
    
  )
}

export default Sell

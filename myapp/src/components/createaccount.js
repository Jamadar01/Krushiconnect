import React,{ useState, useEffect }  from 'react'
import './createaccount.css'
import im2 from "../images/background.jpg";
import axios from "axios"; 
export default function CreateAccount() {

  const [farmerDetails, setfarmerDetails] = useState([]);
  const [user_name, setname] = useState('');
  const [user_mobileno, setmobileno] = useState('');
  const [user_Email, setemail] = useState('');
  const [user_address, setaddress] = useState('');
  const [user_password, setpassword] = useState('');
  
  useEffect(() => {
    axios
      .get('http://localhost:8000/farmer/')
      .then((res) => {
        const data = res.data;
        setfarmerDetails(data);
      })
      .catch((err) => {
        // Handle the error here
      });
  }, []);

  const handleInput = (e) => {
    if (e.target.name === 'user_name') {
      setname(e.target.value);
    } else if (e.target.name === 'user_mobileno') {
      setmobileno(e.target.value);
    } else if (e.target.name === 'user_Email') {
      setemail(e.target.value);
    } else if (e.target.name === 'user_address') {
      setaddress(e.target.value);
    } else if (e.target.name === 'user_password') {
      setpassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user_name', user_name);
    formData.append('user_mobileno', user_mobileno);
    formData.append('user_Email', user_Email);
    formData.append('user_address', user_address);
    formData.append('user_password', user_password);
  
    axios
      .post('http://localhost:8000/farmer/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      })
      .then((res) => {
        setname('');
        setmobileno('');
        setemail('');
        setaddress('');
        setpassword('');
        // Refresh the sellDetails after a new item is created
        axios
          .get('http://localhost:8000/farmer/')
          .then((res) => {
            const data = res.data;
            setfarmerDetails(data);
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
   <div className="createacc-head">
   <div className="centered-box-personal-info">
  <div className="inner-box-personal-info">
  <form onSubmit={handleSubmit}>  
  {/* onSubmit={handleSubmit} */}
    <div className="form-group-personal-info">
      {/* <label htmlFor="username" style={{fontWeight: 'bold'}}>Product Name</label> */}
      <input class="name-personal-info"
        type="text"
        id="username"
        placeholder="Enter Full Name"
        value={user_name} name="user_name"
				onChange={handleInput}
        // value={formData.username}
        // onChange={handleInputChange}
        // required
      />
    </div>
    <div className="form-group-personal-info">
      {/* <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Image</label> */}
      <input className="image-personal-info"
        type="text"
        id="password"
        placeholder="Enter Mobile Number"
        value={user_mobileno} name="user_mobileno"
							onChange={handleInput}
        // value={formData.password}
        // onChange={handleInputChange}
        // required
      />
    </div>

    <div className="form-group-personal-info">
        
        {/* <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Price</label> */}
        <input className="price-personal-info"
          type="text"
          id="password"
          placeholder="Enter Email Address"
          value={user_Email} name="user_Email"
							onChange={handleInput}
          // value={formData.password}
          // onChange={handleInputChange}
          // required
        />
      </div>

     
      <div className="form-group-personal-info">
        
        {/* <label htmlFor="password" style={{fontWeight: 'bold'}}>Product Information</label> */}
        <input className="info-personal-info"
          type="text"
          id="password"
          placeholder="Enter Address"
          value={user_address} name="user_address"
							onChange={handleInput}
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
          placeholder="Enter Password"
          value={user_password} name="user_password"
							onChange={handleInput}
          // value={formData.password}
          // onChange={handleInputChange}
          // required
        />
      </div>

      <div className="a-personal-info"><button type="submit" className="submit-personal-info_save" style={{fontWeight: 'bold'}}>Save</button></div>
    
  </form>
  </div>
</div>
   </div>
</div>
  )
}

import React,{ useState, useEffect } from 'react';
import products from './Productdata.js';
import './Cart.css'
import Onion from "../images/onion.jpeg"
import tomatos from "../images/tomatos.jpg"
import potato from "../images/potato.jpg"
import cauliflower from "../images/cauliflower.jpg"
import carrot from "../images/carrot.jpg"
import Nav from '../components/Nav.js'
import apple from "../images/apple.jpg"
import mango from "../images/mango.jpg"
import watermelon from "../images/watermelon.jpg"
import banana from "../images/banana.jpg"
import grapes from "../images/grapes.jpg"
import {Link} from 'react-router-dom'
import im2 from "../images/background.jpg";
import axios from "axios"; 

const Cart=()=>{

   // const state = { 
	// 	product_details: [], 
	// 	products_name: "", 
	// 	products_image: "", 
    //     products_price: "", 
    //     products_descripton: "", 
    //     products_location: "", 
    //     farmer_name: "", 
	// }; 
    const [cartDetails, setcartDetails] = useState([]);

	// componentDidMount() { 
	// 	let data; 

	// 	axios 
	// 		.get("http://localhost:8000/wel/") 
	// 		.then((res) => { 
	// 			data = res.data; 
	// 			this.setState({ 
	// 				products_details: data, 
	// 			}); 
	// 		}) 
	// 		.catch((err) => {}); 
	// } 

    useEffect(() => {
        axios
          .get("http://localhost:8000/cart/") 
			.then((res) => { 
				const data = res.data; 
                setcartDetails(data);
				// this.setState({ 
				// 	products_details: data, 
				// }); 
			}) 
			.catch((err) => {}); 
      }, []);

    return(
      <>
      <div className='cart_back'>
      <Nav/>
      <img className="im2" src={im2} alt="im2"/>
      
      </div>
      <div className='cart_head'>
       <div className='container_cart'>
          {
              cartDetails.map((currElm)=>
              {
                  return(
                      <>
                      <div className='box_cart'>
                          <div className='prod'>
                              <h1>{currElm.carts_title}</h1>
                          <ul className='content_cart'>
                          
                          <li>
                          <div >
                              <img className='img-box_cart' src={currElm.carts_image} alt='tomato'></img>
                          </div>
                          <div className='Title_cart'>
                          {/* <Link to={"/sell"}>
          <button className='slogan_button'>Tomato</button>
            </Link> */}
                           <Link to={"/product"}>  <h2 className='title'><a href='./productpage.js'>{currElm.carts_name}</a></h2></Link> 
                          </div>
                          </li>
  
                          <li>
                          <div >
                              <img className='img-box_cart' src={currElm.carts_image} alt='onion'></img>
                          </div>
                          <div className='Title_cart'>
                          <h2><a href='./productpage.js'>{currElm.carts_name}</a></h2>
                          </div>
                          </li>
  
                          <li>
                          <div >
                              <img className='img-box_cart' src={currElm.carts_image} alt='Potato'></img>
                          </div>
                          <div className='Title_cart'>
                              <h2><a href='./productpage.js'>{currElm.carts_name}</a></h2>
                          </div>
                          </li>
  
                          <li>
                          <div >
                              <img className='img-box_cart' src={currElm.carts_image} alt='carrot'></img>
                          </div>
                          <div className='Title_cart'>
                              <h2><a href='./productpage.js'>{currElm.carts_name}</a></h2>
                          </div>
                          </li>
  
                          <li>
                          <div >
                              <img className='img-box_cart' src={currElm.carts_image} alt='cauliflower'></img>
                          </div>
                          <div className='Title_cart'>
                              <h2><a href='./productpage.js'>{currElm.carts_name}</a></h2>
                          </div>
                          </li>
                          </ul>
                          </div>
  
                          <div className='prod'>
                              <h1>{currElm.carts_title}</h1>
                          <ul className='content_cart'>
                          
                          <li>
                          <div >
                              <img className='img-box_cart' src={currElm.carts_image} alt='tomato'></img>
                          </div>
                          <div className='Title_cart'>
                              <h2><a href='./productpage.js'>{currElm.carts_name}</a></h2>
                          </div>
                          </li>
  
                          <li>
                          <div >
                              <img className='img-box_cart' src={currElm.carts_image} alt='onion'></img>
                          </div>
                          <div className='Title_cart'>
                              <h2><a href='./productpage.js'>{currElm.carts_name}</a></h2>
                          </div>
                          </li>
  
                          <li>
                          <div >
                              <img className='img-box_cart' src={currElm.carts_image} alt='Potato'></img>
                          </div>
                          <div className='Title_cart'>
                              <h2><a href='./productpage.js'>{currElm.carts_name}</a></h2>
                          </div>
                          </li>
  
                          <li>
                          <div >
                              <img className='img-box_cart' src={currElm.carts_image} alt='carrot'></img>
                          </div>
                          <div className='Title_cart'>
                              <h2><a href='./productpage.js'>{currElm.carts_name}</a></h2>
                          </div>
                          </li>
  
                          <li>
                          <div >
                              <img className='img-box_cart' src={currElm.carts_image} alt='cauliflower'></img>
                          </div>
                          <div className='Title_cart'>
                              <h2><a href='./productpage.js'>{currElm.carts_name}</a></h2>
                          </div>
                          </li>
                          </ul>
                          </div>
                      </div>
                      
                      
  
                     
                      </>
                     
                  )
              })
          }
       </div>
       </div>
      </>
    )
  }
  
  export default Cart;
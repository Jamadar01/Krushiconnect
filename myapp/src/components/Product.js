import React,{ useState, useEffect } from 'react';
import products from './Productdata';
import './Product.css'
import axios from "axios"; 

const Product=()=>{

    // const state = { 
	// 	product_details: [], 
	// 	products_name: "", 
	// 	products_image: "", 
    //     products_price: "", 
    //     products_descripton: "", 
    //     products_location: "", 
    //     farmer_name: "", 
	// }; 
    const [productDetails, setProductDetails] = useState([]);

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
          .get("http://localhost:8000/product/") 
			.then((res) => { 
				const data = res.data; 
                setProductDetails(data);
				// this.setState({ 
				// 	products_details: data, 
				// }); 
			}) 
			.catch((err) => {}); 
      }, []);

    
  return(
    <>
     <div className='container_cart'>
        {
            productDetails.map((currElm)=>
            {
                return(
                    <>
                    <div className='box_cart'>
                        <div className='content_cart'>
                        <div className='img-box_cart'>
                            <img src={currElm.products_image} alt={currElm.products_name}></img>
                        </div>
                        <div className='Title_cart'>
                            <h1>{currElm.products_name}</h1>
                            <div>
                            
                                <h2>{currElm.products_price}</h2>
                                <h3>Location: {currElm.products_location}</h3>
                                <h3>Farmer Name: {currElm.farmer_name}</h3>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='recomended_cart'> 
                    <h1>Recomended</h1>
                    <ul>
                        <li>
                        <div className='imgrec_cart'>
                        <img src={currElm.img} alt={currElm.name} className='imgrec_cart'></img>
                        </div>
                        <div className='Titlerec_cart'>
                            <h2>{currElm.Farmer}</h2>
                            <h3>{currElm.price}</h3>
                            </div>
                        </li>
                        <li>
                        <div className='imgrec_cart'>
                        <img src={currElm.img} alt={currElm.name} className='imgrec_cart'></img>
                        </div>
                        <div className='Titlerec_cart'>
                            <h2>{currElm.Farmer}</h2>
                            <h3>{currElm.price}</h3>
                            </div>
                        </li>
                        <li>
                        <div className='imgrec_cart'>
                        <img src={currElm.img} alt={currElm.name} className='imgrec_cart'></img>
                        </div>
                        <div className='Titlerec_cart'>
                            <h2>{currElm.Farmer}</h2>
                            <h3>{currElm.price}</h3>
                            </div>
                        </li>
                        <li>
                        <div className='imgrec_cart'>
                        <img src={currElm.img} alt={currElm.name} className='imgrec_cart'></img>
                        </div>
                        <div className='Titlerec_cart'>
                        <h2>{currElm.Farmer}</h2>
                            <h3>{currElm.price}</h3>
                            </div>
                        </li>
                    </ul>
                    </div>
                    </>
                )
            })
        }
     </div>
    </>
  )
}

export default Product;
import React, { Component } from "react";

import './Task1.css'


import IMG2 from './IMAGE/2.png'

import IMG3 from './IMAGE/3.png'

import IMG4 from './IMAGE/4.png'

import IMG1 from './IMAGE/1.png'

import HI from'./IMAGE/504-5047420_all-mobile-phone-png-transparent-png.png'







class Task extends Component {


    render(){


        return(
            <div>

            <header>

                <>

                
                
                <div className="container">

                    <h1>PHONE HUB</h1>

                    <div className="nav-link">

                    <p className="link">HOME</p>
                    <p className="link"><a href="#Category">Category</a></p>
                    <p className="link"><a href="#contact">Contact Us</a> </p>


                    </div>

            
            
             </div>
                
                
                
                </>


            </header>
            
            <section>

                   <div className="Home">

                      <h2>Welcome to Phone Hub</h2>
                      <p>Your one-stop destination for the latest smartphones and accessories</p>
                      <div>
                      <img src={HI} alt="i Phone 16" />
                      </div>
                      <button className="btn">Shop Now</button>

                    </div>

                    <div className="Products" id="Category">

                        <h2>Our Products</h2>
                        
                        <div className="product-grid">
    
    <div className="product-card">
      <img src={IMG2} alt="One Plus 13" />
      <h3>One Plus 13</h3>
      <p className="price">₹64,999</p>
      <button className="btn1">Buy Now</button>
    </div>

    <div className="product-card">
      <img src={IMG4} alt="Samsung Galaxy S24" />
      <h3>Samsung Galaxy S24</h3>
      <p className="price">₹97,999</p>
      <button className="btn1">Buy Now</button>
    </div>

    <div className="product-card">
      <img src={IMG1} alt="i Phone 16" />
      <h3>i Phone 16</h3>
      <p className="price">₹72,000</p>
      <button className="btn1">Buy Now</button>
    </div>

    <div className="product-card">
      <img src={IMG3} alt="Google Pixel 9" />
      <h3>Google Pixel 9</h3>
      <p className="price">₹40,599</p>
      <button className="btn1">Buy Now</button>
    </div>
    
   </div>

     <div>
       <button className="btn">Browse More</button>
    </div>



                    </div>

                    <div className="Features">

                        <div className="feature">
                            <h3>📱 Latest Phones</h3>
                            <p>Stay updated with the newest models from top brands</p>
                        </div>
          
                        <div className="feature">
                             <h3>💰 Best Prices</h3>
                             <p>Get the best deals and discounts every day</p>
                       </div>
          
                        <div className="feature">
                            <h3>⚡ Fast Delivery</h3>
                            <p>Quick and reliable delivery right to your doorstep</p>
                        </div>
 

                    </div>

                    <div className="About">
                    
                        <h2>About Us</h2>
                        <div>
                        <p> At <strong>Phone Hub</strong>, we are passionate about providing our
                            customers with the best smartphones and accessories. Our goal is to
                            make technology affordable and accessible to everyone. </p>
                            </div>

         

          </div>



            </section>

            <footer>

               <div className="Footer" id="contact">

                 <div>
                <h3>Address:</h3>
                <p>146A ,Avvai Street Tiruwelleswarar Nagar,
                  <div>Thirumangalam Anna Nagar west ext,</div>
                    <div>Chennai-600040</div></p>
                </div>

              
                <div>
                <h3>Phone No:</h3>
                <p>8870147930</p>
                </div>
                 </div>


            </footer>

            </div>

            

        

            


        )
    }
}



export default Task
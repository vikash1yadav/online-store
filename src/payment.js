import React from 'react';
import "./payment.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./checkoutProduct";
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom";


export default function Payment() {

    const [{basket, user}, dispatch]= useStateValue();

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout(
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                {/* payment section - address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p> 123 react lane </p>
                        <p>los angeles, ca </p>
                    </div>
                </div>
                {/* reviews items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {/* basket component */}
                        {basket.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />

                            ) )
                        }
                    </div>
                </div>


                {/* payment mode */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment_address">
                        
                    </div>
                </div>




            </div>
            
        </div>
    )
}

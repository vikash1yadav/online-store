import React from 'react';
import "./checkout.css";
import checkoutProduct from './checkoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./subtotal";
import CheckoutProduct from "./checkoutProduct"
import userEvent from '@testing-library/user-event';

export default function Checkout() {
    const [{basket, user}, dispatch]=useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_add"
                    src=""
                    alt=".."
                />

                <div>
                    <h3>{user ? user.email : "Guest"}</h3>
                    <h2 className="checkout_title">
                        Your Shopping basket
                    </h2>

                    {basket.map(item =>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                    ))}
                </div>
            </div>
            
            <div className="checkout_right">
                <h2> The Sub Total will come here</h2>
                <Subtotal />
            </div>
            
        </div>
    )
}

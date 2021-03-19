import React from 'react';
import "./Home.css"
import Product from "./Product"

export default function Home() {
    return (
        <div className="home">
            <div className="home_container" >
                <img className="home_image" src="images/1.jpg" />
                {/* <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/Jupiter_GW_Softlines/Phase1_Hero/PEADesktopHero_SL_1500x600FST._CB403166403_.jpg"/> */}
            </div>

            <div className="home_row">
                <Product 
                    id={1}
                    title="Aashirvaad Aata 5 kg"
                    price={350}
                    rating={4}
                    image="images/aata.jpeg"
                />
                <Product 
                    id={1}
                    title="Aashirvaad Aata 5 kg"
                    price={350}
                    rating={4}
                    image="images/aata.jpeg"
                />
                 <Product 
                    id={1}
                    title="Aashirvaad Aata 5 kg"
                    price={350}
                    rating={4}
                    image="images/aata.jpeg"
                />
                 <Product 
                    id={1}
                    title="Aashirvaad Aata 5 kg"
                    price={350}
                    rating={4}
                    image="images/aata.jpeg"
                />
                
            </div>

            <div className="home_row">
            <Product />
                <Product />
                <Product />
            </div>

            <div className="home_row">
                <Product />
                
            </div>

            
        </div>
    )
}

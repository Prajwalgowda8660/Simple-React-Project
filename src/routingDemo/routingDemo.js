import React from "react";
//import {BrowserRouter as Router, Route, link, Routes} from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


function Home(){
    return <h2>Home</h2>;
}
function About(){
    return <h2>About</h2>;

}
function ContactUs(){
    return <h2>ContactUs</h2>;
}
function RoutingDemo(){
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>|<Link to="/about">About</Link>| <Link to="/contact">ContactUs</Link>

                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />       
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactUs />} />
                    
                </Routes>
            </div>
        </Router>
    );
}
 export default RoutingDemo;

import React from "react";
import { useGlobalContext } from "../Hooks/context";
import Navbar from "./Navbar";

const Header = () => {
    const { closeSubMenu } = useGlobalContext();
    const mouseOverHandle = e => {
        closeSubMenu();
    };
    return (
        <div className="header position-relative">
            <div className="overlay position-absolute top-0 end-0 w-100 h-100"></div>
            <Navbar />
            <div
                className="content position-relative d-flex justify-content-center align-content-center flex-column text-center w-50 m-auto text-white"
                onMouseOver={mouseOverHandle}
            >
                <h1>Hello This is Stripe Demo</h1>
                <p>
                    Stripe Demo created by Hossam Alahmad using React.js for
                    traning Stripe Demo created by Hossam Alahmad using React.js
                    for traning Stripe Demo created by Hossam Alahmad using
                    React.js for traning Stripe Demo created by Hossam Alahmad
                    using React.js for traning
                </p>
                <button className="btn text-white">Show Demo</button>
            </div>
        </div>
    );
};

export default Header;

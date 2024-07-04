import React from "react";
import { Hero } from "./components/Hero";
import Navbar from "../../components/Navbar";
import { Vanue } from "./components/Venue";

const Home: React.FC = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="">
                <div className="max-w-[1140px] mx-auto">
                    <Hero></Hero>
                </div>
            </div>
            <div className="mt-52">
                <div className="max-w-[1140px] mx-auto">
                    <Vanue></Vanue>
                </div>
            </div>
        </>
    )
}

export default Home;
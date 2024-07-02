import React from "react";
import { Hero } from "./components/Hero";
import Navbar from "../../components/Navbar";

const Home: React.FC = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="bg-[#F4F4F4]">
                <div className="max-w-[1140px] mx-auto">
                    <Hero></Hero>
                </div>
            </div>

        </>
    )
}

export default Home;
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroImg from "../../../assets/img/hero2.png";
import { FaSearch } from "react-icons/fa";
import Icon1 from "../../../assets/img/icon1.png";

export function Hero() {
    return (
        <div className="flex">
            <div className="flex flex-col mt-5 mb-10">
                <div className="text-[#49516F] space-y-[-5px]">
                    <h2 className="font-poppinsRegular text-[42px]">When your love</h2>
                    <h2 className="font-poppinsRegular font-bold text-[42px]">Dream Wedding come true</h2>
                </div>
                <div className="text-[#49516F] mt-4">
                    <p>“ Once in a while, right in the middle of an <br />
                        ordinary life, love gives us a fairy tale. ”</p>
                </div>
                <div className="relative mt-4">
                    <input
                        type="text"
                        placeholder="Cari Photographer, Katering, dsb"
                        className="pl-5 pr-4 py-2 border-none rounded-lg w-[504px] focus:outline-none focus:border-pink-800 shadow-md"
                    />
                    <FaSearch className="absolute right-7 top-1/2 transform -translate-y-1/2 text-white bg-[#FF477E] text-3xl p-2 rounded-md" />
                </div>
                <div className="grid grid-cols-2 mt-16 gap-y-5 gap-x-2">
                    <div className="flex space-x-3">
                        <div><LazyLoadImage src={Icon1}></LazyLoadImage></div>
                        <div><span className="font-poppinsSemiBold text-[18px] text-[#49516F] ">Desain Website
                        dan Undangan</span></div>
                    </div>
                    <div className="flex space-x-3">
                        <div><LazyLoadImage src={Icon1}></LazyLoadImage></div>
                        <div><span className="font-poppinsSemiBold text-[18px] text-[#49516F] ">Desain Website
                        dan Undangan</span></div>
                    </div>
                    <div className="flex space-x-3">
                        <div><LazyLoadImage src={Icon1}></LazyLoadImage></div>
                        <div><span className="font-poppinsSemiBold text-[18px] text-[#49516F] ">Desain Website
                        dan Undangan</span></div>
                    </div>
                    <div className="flex space-x-3">
                        <div><LazyLoadImage src={Icon1}></LazyLoadImage></div>
                        <div><span className="font-poppinsSemiBold text-[18px] text-[#49516F] ">Desain Website
                        dan Undangan</span></div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <LazyLoadImage src={HeroImg} className="hero-image" />
            </div>
        </div>
    );
}

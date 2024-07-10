import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { ModalVanue } from "../../../components/VanueComponents/ModalVanue";
import { LazyLoadImage } from "react-lazy-load-image-component";
import vanue1 from "../../../assets/img/vanue1.png"
import { CiLocationOn } from "react-icons/ci";

export function Vanue() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="mb-5">
            <div className="flex justify-center space-x-5">
                <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="space-x-2 flex justify-center items-center text-[#49516F] shadow-md border rounded-xl px-6 py-3 font-poppinsRegular text-[18px] bg-white hover:bg-[#5465FF] hover:text-white"
                    type="button"
                >
                    <MdOutlineDashboard></MdOutlineDashboard> <span>Kategory</span>
                </button>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Cari Photographer, Katering, dsb"
                        className="pl-5 pr-12 py-2 border-none rounded-lg w-[504px] h-[52px] focus:outline-none focus:border-pink-800 shadow-md"
                    />
                    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-[#FF477E] text-3xl p-2 rounded-md" />
                </div>
            </div>
            <div className="mb-96 text-center mt-5">
                <div className="grid grid-cols-4">
                    <div>
                        <div className="max-w-sm overflow-hidden shadow-lg ">
                            <LazyLoadImage src={vanue1} className="w-full object-cover rounded-2xl">
                            </LazyLoadImage>

                        </div>
                        <div className="text-[#49516F]">
                            <h3 className="font-poppinsSemiBold text-lg text-left">The Aesthetic</h3>
                            <p className="text-left flex flex-row item-center mt-4"><CiLocationOn className="mr-1 text-black text-lg"></CiLocationOn>Jl. Raya Kuta No. 88, Badung, Bali</p>
                            
                        </div>

                    </div>


                </div>

            </div>

            {isModalOpen && <ModalVanue />}
        </div>
    );
}

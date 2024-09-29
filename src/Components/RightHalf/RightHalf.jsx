import React, { useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import coder from "../../images/coder.png";

const RightHalf = () => {
	return (
		<div className="min-h-screen md:w-1/2 w-1/6  light-gradient-bg">
			<div className="font-sans leading-loose text-2xl md:block hidden font-semibold text-gray-500 font-bold my-10 mx-5 w-fit tracking-wider xl:p-10 p-6  transition duration-200 ease-out transition-all animate-slide-in">
				<span className="xl:text-3xl text-2xl font-semibold text-gray-400 font-bold ">
					Hello, This is{" "}
				</span>
				<span className="xl:text-6xl text-5xl font-bold text-lightslate ">
					Arpit{" "}
				</span>
				<br />
				<div className="xl:text-2xl text-xl text-gray-400 xl:p-4 p-2 font-bold leading-tight">
					A <span className="text-gray-600">Software Developer </span> &{" "}
					<span className="text-gray-600"> Designer</span>
					<br />
					Passionate to make life easy and amazing!!!
				</div>
			</div>
			<div className="text-gray-500 w-fit text-lg tracking-widest absolute  md:bottom-5/12 bottom-2/3 md:-right-8 -right-12 rotate-90 ">
				{" "}
				(+91) - 77019 61032
			</div>
			<div className="w-fit xl:text-2xl text-xl md:text-xl text-md md:px-7 px-0 flex md:py-3 py-3 text-slate-300 absolute font-semibold  bottom-10 right-2 tracking-widest">
				<img src={coder} className="md:block hidden fixed  h-1/4" />
				{/* <span className='md:inline hidden '>RESUME</span>    <a href='https://bit.ly/ad-oct24_1' target="_blank" > <BsArrowUpRightCircleFill className='text-slate-500 hover:text-white h-8 mx-1 w-10 '/> </a> */}
			</div>
		</div>
	);
};

export default RightHalf;

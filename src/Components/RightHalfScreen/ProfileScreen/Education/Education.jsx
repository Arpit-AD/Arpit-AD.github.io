import React, { useState } from "react";
import { FaSchool, FaUserGraduate } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

function Education() {
	return (
		<div>
			<div className="md:flex justify-between items-start">
				<>
					<div className="flex items-start font-semibold text-xl my-1 text-lightslate">
						<FaUserGraduate className=" text-xl h-10 text-slate-700 mr-4" />
						<div>
							Maharaja Surajmal Institute of Technology
							<div className="font-normal font-mono text-darkslate text-base">
								Bachelors in Technology(CSE)
								<br /> GPA-8.9{" "}
							</div>{" "}
						</div>
					</div>
				</>
				<span className="mx-8">2019-2023</span>
			</div>
			<div className="md:flex justify-between items-start">
				<>
					<div className="flex items-start font-semibold text-xl my-1 text-lightslate">
						<FaSchool className="text-2xl text-slate-700 h-10" />

						<div className="font-semibold text-xl mx-3 my-1 text-lightslate">
							Vivekanand School{" "}
							<div className="font-normal font-mono text-darkslate text-base">
								Senior Secondary School (XIIth)
								<br />
								Percentage-89.8{" "}
							</div>
						</div>
					</div>
				</>
				<span className="mx-8">2017-2019</span>
			</div>
			<div className="md:flex justify-between items-start">
				<>
					<div className="flex items-start font-semibold text-xl my-1 text-lightslate">
						<MdSchool className="text-2xl text-slate-700 h-10" />

						<div className="font-semibold text-xl mx-3 my-1 text-lightslate">
							Vivekanand School{" "}
							<div className="font-normal font-mono text-darkslate text-base">
								Secondary School (Xth)
								<br />
								GPA-10
							</div>
						</div>
					</div>
				</>
				<span className="mx-8">2015-2017</span>
			</div>
		</div>
	);
}

export default Education;

import React, { useState } from "react";
import Skills from "../ProfileScreen/Skills/Skills.jsx";
import Education from "./Education/Education.jsx";
const dob = "2001-08-26";
function ProfileScreen() {
	const [showSkills, setShowSkills] = useState("Skills");
	const [age, setAge] = useState(new Date(dob) - new Date());

	function calculateAge(dob) {
		const dobDate = new Date(dob);
		const today = new Date();
		let age = today.getFullYear() - dobDate.getFullYear();
		const monthDifference = today.getMonth() - dobDate.getMonth();

		// If the current month is before the birth month or it's the same month but the current day is before the birth day
		if (
			monthDifference < 0 ||
			(monthDifference === 0 && today.getDate() < dobDate.getDate())
		) {
			age--;
		}

		return age;
	}

	return (
		<div className="xl:w-3/4 w-5/6 mx-auto my-8  transition duration-200 ease-in transition-all animate-slide-in">
			<div className="">
				<div>
					<div className="text-3xl font-bold text-darkslate tracking-tighter my-3">
						About
					</div>
				</div>
				<div className="font-mono my-2 tracking-loose text-slate-600 ">
					<span className="text-lg text-lightslate font-semibold">Heyy!</span>{" "}
					<br />I am a {calculateAge(dob)} Year{" "}
					<span className="font-semibold text-lightslate">
						{" "}
						Software Developer{" "}
					</span>
					who blends the best design and technology to create compelling and
					engaging software.
					<br />
					<br />
					Currently, As a Software Engineer at Veersa Technologies, I modernize
					legacy systems and develop web applications using TypeScript, ReactJS,
					and Java. I transform .NET C# desktop apps into dynamic web platforms,
					optimize data handling with advanced API integrations, and manage
					real-time event processing with Redis and Elasticsearch. I’ve also
					created 80+ Kibana dashboards, improving decision-making by 20%.
					<br />
					<br />
					Beyond my job, I stay ahead in technology through DSA and coding
					platforms, and I work on personal projects like Art-Galore. This blend
					of professional and personal growth ensures I’m well-prepared for
					future opportunities.
				</div>
			</div>
			<div
				className={
					showSkills === "Education"
						? "flex justify-between"
						: "flex-row-reverse flex justify-between"
				}
			>
				<div
					className={
						showSkills === "Education"
							? "text-3xl font-bold  my-3 text-darkslate hover:scale-110 cursor-pointer"
							: "text-lg font-semibold my-1 text-slate-600  hover:scale-110 cursor-pointer"
					}
					onClick={() => setShowSkills("Education")}
				>
					Education
				</div>
				<div
					className={
						showSkills === "Skills"
							? "text-3xl font-bold  my-3 text-darkslate hover:scale-110 cursor-pointer"
							: "text-lg font-semibold my-1 text-slate-600  hover:scale-110 cursor-pointer"
					}
					onClick={() => setShowSkills("Skills")}
				>
					Skills
				</div>
			</div>
			{showSkills === "Education" && (
				<div>
					<Education />
				</div>
			)}

			{showSkills === "Skills" && (
				<div>
					<Skills />
				</div>
			)}
		</div>
	);
}

export default ProfileScreen;

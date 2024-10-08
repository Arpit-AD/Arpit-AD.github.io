import ShrijiShringar from "../images/ShrijiShringar.png";
import Techsoc from "../images/Techsoc.png";
import Ajiledone from "../images/Ajiledone.jpg";
import VeersaImage from "../images/VeersaTechnologiesLogo.png";

const experienceData = [
	{
		experienceName: "Technical Experience",
		experience: [
			{
				companyName: "Veersa Technologies",
				duration: "Aug 2023 - Current",
				position: "Software Developer",
				image: VeersaImage,
				project: [
					{
						nameOfProject: "Healthedge Application + Bridge",
						techStack: [
							"ReactJS",
							"Redux",
							"Saga",
							"C#",
							"dotnet",
							"BitBucket",
							"Jira Platform",
							"Java",
							"Spring Boot",
							"Elasticsearch",
							"Kibana",
						],
					},
				],
				description: [
					"Process - Transformed a legacy desktop application developed in .NET C# by implementing 100+ ReactJS components, integrating with Redux for state management, and using Saga for handling asynchronous actions.",
					"API Integration and Modernization - Modernized the application’s data handling by transforming 500+ existing SOAP API XML responses into JSON objects using bridge, facilitating seamless front-end integration and improved data processing efficiency by over 30%.",
					"Real-Time Event Processing - Utilized Redis to manage and process user interaction events in real-time, storing current events and logging previous events to Elasticsearch, enabling in-depth analysis and visualization in Kibana.",
					"Kibana Dashboards - Created 80+ Kibana dashboards, visualizing data from 10,000+ logs to track trends, activity counts, and durations, increasing data-driven decision-making by 15%",
				],
			},
			{
				companyName: "Veersa Technologies",
				duration: "Feb 2023 - Aug 2023",
				position: "Software Development Intern",
				image: VeersaImage,
				project: [
					{
						nameOfProject: "Healthedge Application",
						techStack: [
							"ReactJS",
							"Redux",
							"Saga",
							"BitBucket",
							"Jira Platform",
						],
					},
				],
				description: [
					"Project - Migrated a desktop application of Healthedge to a web-based platform, shifting user experience and enhancing performance by 25%",
					"Knowledge Transfer - Attended 4 comprehensive knowledge transfer sessions to explain the codebase of both the desktop and web applications.",
				],
			},
			{
				companyName: "Ajiledone Solutions",
				duration: "Jul 2021 - Aug 2021",
				position: "Full Stack Developer Intern",
				image: Ajiledone,
				project: [
					{
						nameOfProject: "Shriji Shringar",
						techStack: [
							"ReactJs",
							"Redux",
							"NodeJs",
							"MongoDB",
							"ExpressJs",
							"Github",
						],
						url: "http://shrijishringar.com/",
					},
				],
				description: [
					"AjileDone Technologies Ltd, a global Information Technology and System Integration company and are today the trusted partner of many organizations, providind end-to-end solutions to our customers, right from project analysis, infrastructure, consulting, designing, implementation, testing to integration and support.",
					"Developed Front‐end of E‐Commerce website using ReactJS, connected to Back‐end, and managed states using Redux.",
					"Built fully responsive UI/UX design for easy to shop experience for customers and integrated APIs.",
				],
			},
		],
	},
	{
		experienceName: "Volunteer Experience",
		experience: [
			{
				companyName: "Techsoc MSIT",
				duration: "Jan 2021 - Oct 2021",
				position: "Graphic Designer",
				image: Techsoc,
				description: [
					"TechSoc is one of the Active technical society of my college MSIT. It's been Of great advantage to work here with fellow skilled members to get an exposure to a large benefitting experience!",
					" The exchange of ideas that we get here are of great help by seniors and mentoring our juniors with our shared experience.",
				],
			},
			{
				companyName: "ADMET 2021",
				duration: "Mar 2021",
				position: "Student Organizer",
				description: [
					"The national conference on Sensors & Advance materials for Measurement & Quality improvement (AdMet-2021) was an effort to highlight and discuss the technological developments in the areas of sensor modeling, measurement, advance material for industrial application, automation and quality control.",
				],
			},
			{
				companyName: "Aaghaz of ENVA'20",
				position: "Event Co-ordinator",
				duration: "Jan 2021",
				description: [
					"Event Coordinator managing creative and technical aspects of events Aaghaz.",
					"This event was organised by the Dramatics society of college : Aarambh MSIT. ",
					"The event was a huge success getting upto 30 registrations of societies of different colleges from Delhi University and Indraprastha University",
				],
			},
		],
	},
];

export default experienceData;

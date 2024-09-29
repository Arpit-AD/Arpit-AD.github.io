import React from "react";
import { ImLinkedin, ImGithub, ImTwitter, ImInstagram } from "react-icons/im";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Links = () => {
	return (
		<div className="text-gray-400 w-1/4 my-20 md:mx-12 mx-6">
			<ul>
				<li>
					<a href="https://github.com/Arpit-AD/" target="_blank">
						<ImGithub className="hover:text-white h-8 w-5" />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/arpit-das-9210a01a5/"
						target="_blank"
					>
						<ImLinkedin className="hover:text-white h-8 w-5" />
					</a>
				</li>
				<li>
					<a href="https://leetcode.com/adarpit/" target="_blank">
						<SiLeetcode className="hover:text-white h-8 w-5" />
					</a>
				</li>
				{/* <li><a href="https://www.codechef.com/users/adarpit" target="_blank"><SiCodechef className='hover:text-white h-8 w-5'/></a></li> */}
				<li>
					<a href="https://codeforces.com/profile/Arpitad" target="_blank">
						<SiCodeforces className="hover:text-white h-8 w-5" />
					</a>
				</li>
				<li>
					{" "}
					<a href="https://bit.ly/ad-oct24_1" target="_blank">
						{" "}
						<BsArrowUpRightCircleFill className="hover:text-white h-8 w-5" />{" "}
					</a>
				</li>
				{/* <li><a href="https://www.instagram.com/arpit_ad_/" target="_blank"><ImInstagram className='hover:text-white h-8 w-5'/></a></li> */}
			</ul>
		</div>
	);
};

export default Links;

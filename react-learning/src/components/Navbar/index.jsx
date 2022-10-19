import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
	const links = [
		{
			id: 1,
			name: "SHOP",
			href: "#",
		},

		{
			id: 2,
			name: "COLLECTIVE",
			href: "#",
		},

		{
			id: 3,
			name: "DESIGNERS",
			href: "#",
		},

		{
			id: 4,
			name: "ABOUT US",
			href: "#",
		},

		{
			id: 5,
			name: "CONTACT",
			href: "#",
		},
	];
	return (
		<nav className="flex justify-between bg-blue-300">
			<div className=" m-2 p-1">COZY</div>

			<ul className="flex space-x-5">
				{links.map(({ id, name, href }) => (
					<li className="m-3" key={id}>
						<a href={href}>{name}</a>
					</li>
				))}
			</ul>
			<div>
				<ul className="flex">
					<li className="m-3">
						<a>
							<FontAwesomeIcon
								icon={faBars}
							/>
						</a>
					</li>
					<li className="m-3 P-1">
						<a>
							<FontAwesomeIcon
								icon={
									faMagnifyingGlass
								}
							></FontAwesomeIcon>
						</a>
					</li>
					<li className="m-3 P-1">
						<a>
							<FontAwesomeIcon
								icon={
									faCartShopping
								}
							></FontAwesomeIcon>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default Navbar;

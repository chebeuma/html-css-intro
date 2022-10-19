import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

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
		<nav className="header">
			<div className="left-nav">
				<div>COZY</div>
			</div>

			<div>
				<ul className="middle-nav">
					{links.map(({ id, name, href }) => (
						<ul className="m-3" key={id}>
							<a href={href}>
								{name}
							</a>
						</ul>
					))}
				</ul>
			</div>
			<div>
				<ul className="right-nav">
					<ul>
						<a>
							<FontAwesomeIcon
								icon={faBars}
							/>
						</a>
					</ul>
					<ul>
						<a>
							<FontAwesomeIcon
								icon={
									faMagnifyingGlass
								}
							></FontAwesomeIcon>
						</a>
					</ul>
					<ul>
						<a>
							<FontAwesomeIcon
								icon={
									faCartShopping
								}
							></FontAwesomeIcon>
						</a>
					</ul>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;

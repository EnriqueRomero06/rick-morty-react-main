import React, { useState } from "react";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import LogoutButton from "./Logout";
import Profile from "./Profile";

const Menu = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] sticky top-0 z-50 bg-white">
			<div className="xk:w-1/6 text-center">
				<a href="#bienvenido" className="text-2xl font-bold flex">
					<img
						src="https://i.ibb.co/jJ0qK7B/rick-icon-1-1.png"
						class="md:scale-50"
						alt="Rick Logo"
					></img>
				</a>
			</div>
			<nav
				className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
					showMenu ? "left-0" : "-left-full"
				} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10`}
			>
				<Link to="/bienvenido" className="">
					Bienvenido
				</Link>
				<Link to="/personajes" className="">
					Personajes de la Serie
				</Link>
				<Link to="/participantes" className="">
					Participantes
				</Link>
				<a>{Profile()}</a>
				<a>
					<LogoutButton />
				</a>
			</nav>
			<button
				onClick={() => setShowMenu(!showMenu)}
				className="xl:hidden text-2xl p-2"
			>
				{showMenu ? <RiMenuUnfoldFill /> : <RiMenuFoldFill />}
			</button>
		</header>
	);
};

export default Menu;

import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
	const { logout } = useAuth0();

	return (
		<>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
				onClick={() => logout({ returnTo: window.location.origin })}
			>
				Cerrar Sesion
			</button>
		</>
	);
}

export default LogoutButton;

import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
	const { loginWithRedirect } = useAuth0();
	return (
		<div className="flex flex-col gap-8">
			<h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem] text-center">
				The Rick and Morty 
			</h1>
			<p className="text-white text-2xl leading-[2.5rem] text-center">
				Científicamente hablando, las tradiciones son estúpidas
            </p>
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
				onClick={() => loginWithRedirect()}
			>
				Iniciar Sesión
			</button>
		</div>
	);
}

export default LoginButton;

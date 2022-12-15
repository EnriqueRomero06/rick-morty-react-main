import LoginButton from "./components/Login";
import Authenticated from "./components/Authenticated";
import Menu from "./components/Menu";
import Bienvenido from "./components/Bienvenido";
import Participantes from "./components/Participantes";
import Personajes from "./components/Personajes";
function App() {
	return (
		<div>
			<div>
				{Authenticated() ? (
					<div>
						<Menu />
						<Bienvenido />
						<Personajes />
						<Participantes />
					</div>
				) : (
					<div
						style={{
							backgroundImage: `url("https://images3.alphacoders.com/812/812062.png")`,
							height: "100vh",
						}}
						className="grid grid-cols gap-5 w-screen  place-items-center  bg-origin-border bg-no-repeat bg-center bg-cover"
					>
						<LoginButton />
					</div>
				)}
			</div>
		</div>
	);
}

export default App;

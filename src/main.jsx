import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Participantes from "./components/Participantes";
import CharacterList from "./components/CharacterList";
import Bienvenido from "./components/Bienvenido";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-t2pmv2st5h8xyk6n.us.auth0.com"
			clientId="iadl8dVzFrzvxJRD61Xl8MQNzEchuvS4"
			redirectUri={window.location.origin}
		>
			<Router>
				<Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/Participantes" element={<Participantes />} />
                    <Route path="/Personajes" element={<CharacterList />} />
                    <Route path="/Bienvenido" element={<Bienvenido />} />
				</Routes>
			</Router>
		</Auth0Provider>
	</React.StrictMode>,
);

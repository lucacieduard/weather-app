import classes from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./pages/City/Single/Single";
import Home from "./pages/Home/Home";
import MultiplePage from "./pages/City/XDays/Multiple";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path=":city">
						<Route path="acum" element={<Single />} />
						<Route path=":days">
							<Route path="zile" element={<MultiplePage />} />
						</Route>
					</Route>
				</Route>
				<Route path="*" element={<p>no match</p>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

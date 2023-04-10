import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="test" element={<p>test</p>} />
				</Route>
				<Route path="*" element={<p>no match</p>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

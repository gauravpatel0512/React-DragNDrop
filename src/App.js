import React from "react";
import DragNDrop from "./components/DragNDrop";
import "./App.css";

const data = [
	{ title: "Group 1", items: ["1", "2", "3"] },
	{ title: "Group 2", items: ["4", "5"] },
	{ title: "Group 3", items: ["6", "7", "8"] },
	{ title: "Group 4", items: ["9", "10", "11", "12"] },
];

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<DragNDrop data={data} />
			</header>
		</div>
	);
}

export default App;

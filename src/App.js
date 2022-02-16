import React, { useEffect } from "react";
import MainNavigation from "./components/MainNavigation";

const App = () => {
	useEffect(() => {
		const scriptmasonary = document.createElement("script");
		scriptmasonary.src = "/js/masonary-custom.js";
		scriptmasonary.async = true;
		document.head.appendChild(scriptmasonary);
	});
	return (
		<>
			<MainNavigation />
		</>
	)
}

export default App;

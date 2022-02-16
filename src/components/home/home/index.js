import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import PageContent from "./content";
import Slider from "./content/Slilder"

const Home = () => {
	return (
		<>
			<Header />
			<Slider/>
			<PageContent />
			<Footer />
		</>
	);
};
export default Home;

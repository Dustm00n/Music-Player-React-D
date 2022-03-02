import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import botones from "./Botones.jsx";
import PlayList from "./playlist.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<PlayList />
			<Botones />
		</>
	);
};
export default Home;

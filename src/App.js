import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import GameApp from "./GameApp";
import Recap from "./Recap";
import Start from "./Start";
import GameOver from "./GameOver";

import { level, pageToRender } from "./recoil_state";

import generateTileLocations from "./utils/populateTiles";

function App() {
	const levelState = useRecoilValue(level);
	const currentPageToRender = useRecoilValue(pageToRender);
	// console.log(currentPageToRender);

	const [locations, setLocations] = useState([]);

	// When round is over, rerender locations
	useEffect(() => {
		setLocations(generateTileLocations(levelState));
	}, [currentPageToRender, levelState]);

	if (currentPageToRender === "start") {
		return <Start />;
	} else if (currentPageToRender === "game-over") {
		return <GameOver />;
	} else if (currentPageToRender === "recap") {
		return <Recap />;
	} else {
		return <GameApp locations={locations}></GameApp>;
	}
}

export default App;

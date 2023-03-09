import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import GameApp from "./GameApp";
import Recap from "./Recap";
import { level, strikes, clickCount, roundStart } from "./recoil_state";

import generateTileLocations from "./utils/populateTiles";

function App() {
	const [levelState, setLevelState] = useRecoilState(level);
	const [roundStartState, setRoundStartState] = useRecoilState(roundStart);
	// const [pageToRender, setPageToRender] = useState();
	const clickCountState = useRecoilValue(clickCount);

	const [locations, setLocations] = useState([]);
	console.log("Rerendering App");

	// TODO: On last click, go to recap screen if correct and increase level
	useEffect(() => {
		if (clickCountState === levelState + 1 && roundStartState) {
			setRoundStartState(!roundStartState);
			setLevelState(levelState + 1);
			console.log("Round Over");
		}
	}, [clickCountState]);

	// When round is over, rerender locations

	useEffect(() => {
		setLocations(generateTileLocations(levelState));
		// console.log(locations);
	}, [levelState]);

	return <GameApp locations={locations}></GameApp>;
}

export default App;

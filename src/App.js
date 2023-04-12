import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import GameApp from "./GameApp";
import Recap from "./Recap";
import Start from "./Start";
import GameOver from "./GameOver";

import {
	level,
	strikes,
	clickCount,
	roundStart,
	gameStart,
	pageToRender,
} from "./recoil_state";

import generateTileLocations from "./utils/populateTiles";

function App() {
	const [gameStartState, setGameStartState] = useRecoilState(gameStart);
	const [levelState, setLevelState] = useRecoilState(level);
	const [roundStartState, setRoundStartState] = useRecoilState(roundStart);
	const [clickCountState, setClickCountState] = useRecoilState(clickCount);
	const currentPageToRender = useRecoilValue(pageToRender);

	const [locations, setLocations] = useState([]);
	// console.log("Rerendering App");

	// TODO: On last click, go to recap screen if correct and increase level
	// useEffect(() => {
	// 	// If the last tile is clicked, End the round, increase the level, and reset click count state
	// 	if (clickCountState === levelState + 1 && roundStartState) {
	// 		console.log("Round Over");
	// 	}

	// 	// if (strikes === 3) {
	// 	// }
	// }, [clickCountState]);

	// When round is over, rerender locations
	useEffect(() => {
		setLocations(generateTileLocations(levelState));
		// console.log(locations);
	}, [levelState]);

	useEffect(() => {
		console.log(currentPageToRender);
	}, []);

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

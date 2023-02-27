import React, { useState, useEffect } from "react";
import GameTile from "./GameTile";

import generateTileLocations from "./utils/populateTiles";

function GameApp() {
	const [level, setLevel] = useState(4);
	const [strikes, setStrikes] = useState(0);
	const [clickTracker, setClickTracker] = useState(0);
	let locations = [];

	generateTileLocations(locations, level);
	// console.log(locations);

	// TODO: On first click, start turn to turn tile color to white
	// TODO: On last click, Go to recap screen if correct and increase level
	// TODO: On every click, check if correct: update click tracker if correct, go to recap screen if incorrect and update strikes
	// Share level, strikes, click tracker, game state with context api

	// useEffect(() => {
	// 	// When the game first starts and every time the level changes, reset locations and generate new tile locations
	// 	locations = [];
	// 	generateTileLocations(locations, level);
	// 	console.log(locations);
	// }, [level]);

	return (
		<div className="gameGrid">
			{locations.map((location, idx) => {
				let order = idx + 1;
				const [column, row] = location;

				return (
					<GameTile
						key={idx}
						column={column}
						row={row}
						order={order}
					></GameTile>
				);
			})}
		</div>
	);
}

export default GameApp;

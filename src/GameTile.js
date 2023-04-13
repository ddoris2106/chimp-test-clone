import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
	level,
	strikes,
	incorrectClick,
	clickCount,
	roundStart,
} from "./recoil_state";

function GameTile({ column, row, order }) {
	const [isTileDisplayed, setIsTileDisplayed] = useState(true);
	const [strikesState, setStrikesState] = useRecoilState(strikes);
	const [clickCountState, setClickCountState] = useRecoilState(clickCount);
	const setIncorrectClickState = useSetRecoilState(incorrectClick);
	const [roundStartState, setRoundStartState] = useRecoilState(roundStart);
	const levelState = useRecoilValue(level);

	const handleUserClick = (e) => {
		e.preventDefault();

		// Start Round if first click
		if (clickCountState === 1) {
			setRoundStartState(!roundStartState);
		}

		// If correct click
		if (order === clickCountState) {
			// Remove tile from screen
			let tileDisplay = false;
			setIsTileDisplayed(tileDisplay);
			// Increse clickcount
			setClickCountState(clickCountState + 1);
		}
		// If incorrect click
		else {
			// Increase strike and set state for recap screen
			setStrikesState(strikesState + 1);
			setIncorrectClickState(true);
		}
	};

	useEffect(() => {
		// Every time a new level starts, reset the tile display
		setIsTileDisplayed(true);
	}, [levelState]);

	// Add class name of playing when game is being played and clicked when tile is clicked
	return (
		<div
			className={`gameTile${roundStartState ? " playing" : ""}${
				isTileDisplayed ? "" : " clicked"
			}`}
			style={{
				gridColumn: column,
				gridRow: row,
			}}
			onClick={(e) => handleUserClick(e)}
		>
			{roundStartState === false && order}
		</div>
	);
}

export default GameTile;

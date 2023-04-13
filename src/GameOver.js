import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {
	level,
	strikes,
	clickCount,
	incorrectClick,
	gameStart,
	roundStart,
} from "./recoil_state";

function GameOver() {
	const levelState = useRecoilValue(level);
	const resetLevel = useResetRecoilState(level);
	const resetStrikes = useResetRecoilState(strikes);
	const resetClickCount = useResetRecoilState(clickCount);
	const resetIncorrectClickCount = useResetRecoilState(incorrectClick);
	const resetGameStart = useResetRecoilState(gameStart);
	const resetRoundStart = useResetRecoilState(roundStart);

	const resetGame = () => {
		resetLevel();
		resetStrikes();
		resetClickCount();
		resetIncorrectClickCount();
		resetGameStart();
		resetRoundStart();
	};

	const handleClick = (e) => {
		resetGame();
	};

	return (
		<div className="game-over">
			<h3>Score</h3>
			<p>{levelState}</p>
			<button onClick={(e) => handleClick(e)}>Try Again</button>
		</div>
	);
}

export default GameOver;

import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
	level,
	strikes,
	roundStart,
	clickCount,
	incorrectClick,
} from "./recoil_state";

function Recap() {
	const strikesState = useRecoilValue(strikes);
	const [incorrectClickState, setIncorrectClickState] =
		useRecoilState(incorrectClick);
	const [levelState, setLevelState] = useRecoilState(level);
	const setRoundStartState = useSetRecoilState(roundStart);
	const setClickCountState = useSetRecoilState(clickCount);

	const handleClick = (e) => {
		e.preventDefault();

		// Reset strikes, increase level, and reset round start state if no strikes were accumulated in the round
		if (incorrectClickState !== true) {
			setLevelState(levelState + 1);
		} else {
			setIncorrectClickState(false);
		}
		setRoundStartState(false);
		setClickCountState(1);
	};

	return (
		<div className="recap">
			<>
				<h3>NUMBERS</h3>
				<p>{levelState}</p>
			</>
			<>
				<h3>STRIKES</h3>
				<p>{`${strikesState} of 3`}</p>
			</>
			<button onClick={(e) => handleClick(e)}>Continue</button>
		</div>
	);
}

export default Recap;

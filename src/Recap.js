import React from "react";
import { useRecoilState } from "recoil";

import { level, strikes, roundStart, clickCount } from "./recoil_state";

function Recap() {
	const [strikesState, setStrikesState] = useRecoilState(strikes);
	const [levelState, setLevelState] = useRecoilState(level);
	const [roundStartState, setRoundStartState] = useRecoilState(roundStart);
	const [clickCountState, setClickCountState] = useRecoilState(clickCount);

	const handleClick = (e) => {
		e.preventDefault();

		// Reset strikes, increase level, and reset round start state
		setLevelState(levelState + 1);
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

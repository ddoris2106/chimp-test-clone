import React from "react";
import { useSetRecoilState } from "recoil";

import { gameStart } from "./recoil_state";

function Start() {
	const setGameStartState = useSetRecoilState(gameStart);

	const handleClick = (e) => {
		e.preventDefault();

		setGameStartState(true);
	};

	return (
		<div className="start">
			<button
				onClick={(e) => {
					handleClick(e);
				}}
			>
				Start Game
			</button>
		</div>
	);
}

export default Start;

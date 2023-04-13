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
			<h3>Are You Smarter Than a Chimpanzee?</h3>
			<p>Click the squares in order according to their numbers.</p>
			<p>The test will get progressively harder.</p>
			<button
				onClick={(e) => {
					handleClick(e);
				}}
			>
				Start Test
			</button>
		</div>
	);
}

export default Start;

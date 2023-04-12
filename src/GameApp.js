import React from "react";
// import { useRecoilState } from "recoil";
// import { level, clickCount } from "./recoil_state";
import GameTile from "./GameTile";

function GameApp(props) {
	// const [levelState, setLevelState] = useRecoilState(level);
	// const [clickCountState, setClickCountState] = useRecoilState(clickCount);
	const locations = props.locations;
	console.log("New Locaions");
	console.log(locations);

	// filter array of tiles to only show displayed tiles
	return (
		<div className="gameGrid">
			{locations.map(([key, value], idx) => {
				let order = idx + 1;
				const [column, row] = key;

				return (
					<GameTile
						key={key}
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

import React from "react";

function GameTile({ column, row, order }) {
	return (
		<div
			className="gameTile"
			style={{
				gridColumn: column,
				gridRow: row,
			}}
		>
			{order}
		</div>
	);
}

export default GameTile;

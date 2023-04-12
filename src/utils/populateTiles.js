// const generateRandomLocation = (locations) => {
// 	let randomColumn = Math.floor(Math.random() * (9 - 1) + 1);
// 	let randomRow = Math.floor(Math.random() * (5 - 1) + 1);

// 	let newLocations = [randomColumn, randomRow];
// 	// console.log(newLocations);
// 	if (locations) {
// 		if (locations.length > 0) {
// 			let itemInArr = locations.some((currentLocations) => {
// 				const [storedVal1, storedVal2] = currentLocations;
// 				const [randomVal1, randomVal2] = newLocations;

// 				return storedVal1 === randomVal1 && storedVal2 === randomVal2;
// 			});

// 			if (itemInArr) {
// 				generateRandomLocation();
// 			} else {
// 				locations.push(newLocations);
// 				// console.log(locations);
// 			}
// 		} else {
// 			locations.push(newLocations);
// 			// console.log(locations);
// 		}
// 	}
// };

const generateRandomLocation = (locations) => {
	const maxColumns = 8;
	const maxRows = 5;
	let newLocation = null;

	while (!newLocation) {
		const randomColumn = Math.floor(Math.random() * maxColumns);
		const randomRow = Math.floor(Math.random() * maxRows);
		const key = `${randomColumn},${randomRow}`;

		if (!locations[key]) {
			newLocation = [randomColumn, randomRow];
			locations[key] = true;
		}
	}

	return newLocation;
};

const generateTileLocations = (level) => {
	let locations = {};
	for (let i = 1; i <= level; i++) {
		generateRandomLocation(locations);
	}
	return Object.entries(locations);
};

export default generateTileLocations;

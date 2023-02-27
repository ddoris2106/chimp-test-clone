const generateRamdonLocation = (locations) => {
	let randomColumn = Math.floor(Math.random() * (9 - 1) + 1);
	let randomRow = Math.floor(Math.random() * (5 - 1) + 1);

	let newLocations = [randomColumn, randomRow];
	// console.log(newLocations);
	if (locations) {
		if (locations.length > 0) {
			let itemInArr = locations.some((currentLocations) => {
				const [storedVal1, storedVal2] = currentLocations;
				const [randomVal1, randomVal2] = newLocations;

				return storedVal1 === randomVal1 && storedVal2 === randomVal2;
			});

			if (itemInArr) {
				generateRamdonLocation();
			} else {
				locations.push(newLocations);
				// console.log(locations);
			}
		} else {
			locations.push(newLocations);
			// console.log(locations);
		}
	}
};

const generateTileLocations = (locations, level) => {
	for (let i = 1; i <= level; i++) {
		generateRamdonLocation(locations);
	}
};

export default generateTileLocations;

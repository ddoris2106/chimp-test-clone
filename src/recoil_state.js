import { atom, selector } from "recoil";

const level = atom({
	key: "GameLevel",
	default: 4,
});

const strikes = atom({
	key: "GameStrikes",
	default: 0,
});

const clickCount = atom({
	key: "GameClickCount",
	default: 1,
});

const incorrectClick = atom({
	key: "GameIncorrectClick",
	default: false,
});

const roundStart = atom({
	key: "GameRoundStart",
	default: false,
});

const gameStart = atom({
	key: "GameStart",
	default: false,
});

const pageToRender = selector({
	key: "PageToRender",
	get: ({ get }) => {
		const currentClickCount = get(clickCount);
		const currentLevel = get(level);
		const currentStrikes = get(strikes);
		const currentIncorrectClick = get(incorrectClick);
		// const isRoundStart = get(roundStart);
		const isGameStart = get(gameStart);

		if (isGameStart === false) {
			return "start";
		} else if (currentStrikes === 3) {
			return "game-over";
		} else if (
			currentClickCount === currentLevel + 1 ||
			currentIncorrectClick === true
		) {
			return "recap";
		} else {
			return "game";
		}
	},
});

export {
	level,
	strikes,
	clickCount,
	incorrectClick,
	gameStart,
	roundStart,
	pageToRender,
};

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

const roundStart = atom({
	key: "GameRoundStart",
	default: false,
});

const gameStart = atom({
	key: "GameStart",
	default: false,
});

export { level, strikes, clickCount, gameStart, roundStart };

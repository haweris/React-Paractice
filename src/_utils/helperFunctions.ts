export { getRandomInt, autoIncNumber };

const getRandomInt = (min: number, max: number): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

let num = 0;
const autoIncNumber = (): number => {
	return ++num;
};
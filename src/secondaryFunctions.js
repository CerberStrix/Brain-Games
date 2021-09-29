const getRandomNumb = (defaultStep = 100) => Math.floor(Math.random() * defaultStep);
const getNumbInRange = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export { getRandomNumb, getNumbInRange };

const square = function (x) {
	return x * x;
};

const squareArrow = (x) => x * x;

console.log('normal', square(3));
console.log('arrow', squareArrow(4))


const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName('Guilherme Fernandes'))
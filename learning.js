const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// explaining reduce method

const balance = movements.reduce((acc, curr, i, arr) => {
    console.log(`Iteration ${i}: ${acc}`);
    return acc + curr;
}, 0);

console.log(balance);

// same thing without reduce

let balanceTwo = 0;
for (const mov of movements) balanceTwo += mov;

console.log('balnaceTwo', balanceTwo);

// take max value with reduce

const max = movements.reduce((acc, curr) => {
    if (acc > curr) {
        return acc;
    } else {
        return curr;
    }
}, movements[0]);

console.log('max', max);

// pipeline
const eurToUsd = 1.1;

const totalDepositsUSD = movements
    .filter((mov) => mov > 0)
    .map((mov) => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);

console.log('total', totalDepositsUSD);

console.log('komentar');

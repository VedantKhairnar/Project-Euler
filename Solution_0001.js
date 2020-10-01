/* 1.
 *
 * Very simple brute force solution that goes
 * through all of the numbers between 3..n and
 * adds them up when they're divisible by 3 and 5.
 */
 
let n = 1000;
let bruteforce_sum = 0;

// Start at i = 3, since we're not interested in anything below 3
for(let i = 3; i < n; i++) {

  bruteforce_sum += i % 3 === 0 || i % 5 === 0 ? i : 0;

}

console.log("Bruteforce Solution:", bruteforce_sum); // 233168



/* 2.
 *
 * Way more efficient solution using finite arithmetic progression and series
 */
 
function sum(n) {
  return (n * (n + 1)) / 2;
}

const threes = (3 * sum(Math.floor(999/3)));
const fives = (5 * sum(Math.floor(999/5)));
const fifteens = (15 * sum(Math.floor(999/15)));

const solution =  threes + fives - fifteens;

console.log("Solution:", solution); // 233168

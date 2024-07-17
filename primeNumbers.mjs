import chalk from 'chalk';

// Функция для проверки, является ли число простым
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Функция для вывода простых чисел от M до N
function printPrimeNumbers(M, N) {
    const primes = [];
    for (let i = M; i <= N; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Константы для диапазона M и N
const M = 1;
const N = 100;

// Вывод простых чисел от M до N
console.log(chalk.green(`Простые числа от ${M} до ${N}:`));
console.log(printPrimeNumbers(M, N).join(', '));

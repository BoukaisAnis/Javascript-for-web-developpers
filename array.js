function averageOfEvens(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const sumOfEvens = evenNumbers.reduce((sum, num) => sum + num, 0);
    return evenNumbers.length === 0 ? 0 : sumOfEvens / evenNumbers.length;
}


console.log(averageOfEvens([1, 2, 3, 4, 5, 6])); 

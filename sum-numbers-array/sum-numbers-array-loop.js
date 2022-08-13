const numbers = [1, 3, 8, 5, 7];

const sumNumbersArray = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

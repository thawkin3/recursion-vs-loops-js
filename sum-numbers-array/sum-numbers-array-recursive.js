const numbers = [1, 3, 8, 5, 7];

const sumNumbersArray = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers[0] + sumNumbersArray(numbers.slice(1));
}

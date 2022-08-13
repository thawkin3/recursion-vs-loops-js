const numbers = [1, 3, 8, 5, 7];

const maxNumberArray = (numbers) => {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

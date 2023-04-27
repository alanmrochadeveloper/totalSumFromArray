const totalSumArray = (array) => {
  if (array.length < 1) return 0;
  const firstItemValue = array.pop()
  return firstItemValue + totalSumArray(array);
}

const input = [1, 2, 3, 4, 5]
const total = totalSumArray(input);
console.log('sum = ', total);

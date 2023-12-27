function findIndicesWithSum(targetSum, numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === targetSum) {
      return [left, right];
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

// Example usage:
const targetSum = 9;
const numbers = [2, 4, 5, 7, 11, 15];

const result = findIndicesWithSum(targetSum, numbers);

if (result !== null) {
  const [index1, index2] = result;
  console.log(`Indices with sum ${targetSum}: ${index1}, ${index2}`);
} else {
  console.log(`No indices found with sum ${targetSum}`);
}

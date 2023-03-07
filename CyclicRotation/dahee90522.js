function solution(A, K) {
  let array = A;
  for (let i = 0; i < K; i++) {
    array.unshift(array.pop());
  }
  return array;
}
console.log(solution([3, 8, 9, 7, 6], 5));

// result - https://app.codility.com/demo/results/trainingG6A367-SW2/

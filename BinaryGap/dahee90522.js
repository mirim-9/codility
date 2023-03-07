function solution(N) {
  let binaryNumber = N.toString(2);
  let binaryNumberLength = binaryNumber.length;
  let start = 0;
  let prevNumber = 1;
  let binaryGap = 0;
  let banaryGapTemp = [0];
  if (
    binaryNumber.split(1).length - 1 >= 2 &&
    binaryNumber.split(0).length - 1 > 0
  ) {
    for (let i = 0; i < binaryNumberLength; i++) {
      let currentNumber = parseInt(binaryNumber[i]);
      if (currentNumber === 1) {
        start = 1;
        banaryGapTemp.push(binaryGap);
        binaryGap = 0;
      } else if (start === 1 && currentNumber === 0) {
        binaryGap++;
      }
      prevNumber = currentNumber;
    }
  }
  return Math.max(...banaryGapTemp);
}
console.log(solution(9));

// result - https://app.codility.com/demo/results/training9ERXTM-5Z8/

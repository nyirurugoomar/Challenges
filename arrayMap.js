function Subarray(arr, target) {
    let sum = 0;
    let startIndex = 0;

    for (let endIndex = 0; endIndex < arr.length; endIndex++) {
        sum += arr[endIndex];

        while (sum > target && startIndex <= endIndex) {
            sum -= arr[startIndex];
            startIndex++;
        }

        if (sum === target) {
            return true;
        }
    }

    return false;
}

let arr = [3, 5, 7, 8, 4, 3];
let target = 30;
console.log(Subarray(arr, target));


// HERE THE RESULT BECAME FALSE
// let arr = [3,6,3,2,9,3,2];
// let target = 30;
// console.log(hasSubarrayWithTargetSum(arr, target)); // 
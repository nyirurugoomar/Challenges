# Challenges

## ArrayMap

The Subarray using javascript function to checks if there exists a contiguous subarray within a given array that sums up to a specified target sum. It uses the sliding window technique for efficient computation.

Parameters
arr (Array of integers): The input array in which to search for a contiguous subarray.
target (Integer): The target sum for the contiguous subarray.
Returns
Boolean: Returns true if a contiguous subarray with the target sum exists, otherwise returns false.
Time Complexity
O(n), where n is the length of the input array.
Space Complexity
O(1), constant space usage.

function Subarray(arr, target) {
    // Initialize the sum of the current subarray to 0.
    let sum = 0;
    // Initialize the starting index of the current subarray to 0.
    let startIndex = 0;

    // Iterate over each element in the array using the endIndex.
    for (let endIndex = 0; endIndex < arr.length; endIndex++) {
        // Add the current element to the sum.
        sum += arr[endIndex];

        // While the sum is greater than the target and the startIndex is less than or equal to the endIndex,
        // adjust the window by subtracting the element at startIndex and incrementing startIndex.
        while (sum > target && startIndex <= endIndex) {
            sum -= arr[startIndex];
            startIndex++;
        }

        // If the current sum equals the target, return true.
        if (sum === target) {
            return true;
        }
    }

    // If no subarray with the target sum is found, return false.
    return false;
}

// Example usage:
let arr = [3, 5, 7, 8, 4, 3];
let target = 30;
console.log(Subarray(arr, target)); // Output: true

* Resources
For more information on related concepts, check out these resources:

Sliding Window Technique - GeeksforGeeks
JavaScript Arrays - W3Schools
JavaScript Array slice() Method - W3Schools
Subarray with given sum - GeeksforGeeks
ChtGpt also help me for more more information

# String Transformation Function

This project contains a JavaScript function that transforms a given string based on specific rules related to its length. The function performs different operations if the length of the string is divisible by 3, 5, or both (15).

## Transformation Rules

1. **If the length of the string is divisible by 3**, reverse the entire string.
2. **If the length of the string is divisible by 5**, replace each character with its ASCII code.
3. **If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15)**, perform both operations in the specified order (reverse the string first, then replace each character with its ASCII code).

## Implementation

The function `transformString` is implemented in JavaScript.

### Function Definition

```javascript
function transformString(s) {
    const length = s.length;
    let result = s;
    
    if (length % 15 === 0) {
        // If length is divisible by 15, perform both operations in order
        result = s.split('').reverse().join(''); // Reverse the string
        result = Array.from(result).map(char => char.charCodeAt(0)).join(''); // Replace with ASCII codes
    } else if (length % 3 === 0) {
        // If length is divisible by 3, reverse the string
        result = s.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // If length is divisible by 5, replace each character with its ASCII code
        result = Array.from(s).map(char => char.charCodeAt(0)).join('');
    }
    
    return result;
}

* Resources
For more information on related concepts, check out these resources:

Sliding Window Technique - GeeksforGeeks
JavaScript Arrays - W3Schools
JavaScript Array slice() Method - W3Schools
Subarray with given sum - GeeksforGeeks
ChtGpt also help me for more more information



  Running the Code
  1.Node.js (Ensure you have Node.js installed on your machine)
  2.Run the code using Node filename
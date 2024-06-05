function transformString(n) {
    const length = n.length;
    let result = n;
    
    if (length % 15 === 0) {
        
        result = n.split('').reverse().join(''); 
        result = Array.from(result).map(char => char.charCodeAt(0)).join(''); 
    } else if (length % 3 === 0) {
        
        result = n.split('').reverse().join('');
    } else if (length % 5 === 0) {
        
        result = Array.from(n).map(char => char.charCodeAt(0)).join('');
    }
    
    return result;
}

// Test cases                                                  
console.log(transformString("Hamburger"));      // Length 9, divisible by 3 -> Reverse: "regrubmaH"   
console.log(transformString("Pizza"));        // Length 5, divisible by 5 -> ASCII codes: "8010512212297"
console.log(transformString("Chocolate Chip Cookie"));  // The length of the string is 21, which is divisible by 3 but not by 5 or 15. -> the string is reversed, resulting in "eikooCpihCetalocohC".

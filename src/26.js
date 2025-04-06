function isPalindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome("A man a plan a canal Panama"));

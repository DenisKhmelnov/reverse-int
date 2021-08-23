module.exports = function reverse (n) {
    let reversedString = Math.abs(n).toString();
    let output = Array.from(reversedString).reverse().toString().split(',').join('');
    return output;
}

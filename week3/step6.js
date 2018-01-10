function vehicle(color, code, age) {
    if (age === 5) { age = 'used' }
    if (code === 1) { code = 'car' }
    return 'This is a ' + color + ' ' + age + ' ' + code + ' .';
}
var n = vehicle('blue', 1, 5);
console.log(n);

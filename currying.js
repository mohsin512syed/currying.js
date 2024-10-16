function formatter(prefix) {
    return function(str) {
        return `${prefix} ${str}`;
    };
}

const greet = formatter('Hello,')('Alice');
const warn = formatter('Warning:')('system error');

console.log(greet)
console.log(warn)

console.log( formatter('Hello,')('Alice'));
console.log( formatter('Warning:')('system error'));



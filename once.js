// Implement a once(fn) function that ensures the provided function fn is executed only once, no matter how many times it is called.
//  Subsequent calls should return the result of the first invocation without calling fn again.

function once(fn) {
    let flag = false;
    let res;
    return function(a, b) {
        if(flag === false) {
            flag = true;
            res = fn.apply(this, [a,b])
            return res;
        }else {
            return res
        }
    }
    
    }

function fun(a, b) {
    return a+b;
    // return Math.floor(Math.random()*10);
}

let res1 = once(fun)

console.log(res1(10, 20));
console.log(res1(10, 20));
console.log(res1(10, 20));

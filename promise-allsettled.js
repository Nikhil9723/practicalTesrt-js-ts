// create a function promiseMerge that takes two promises and merges them of if they are of same type and returns a promise with merged value.
// if any of the promise rejects then Promise with rejected value
async function promiseMerge(p1, p2) {
    return Promise.allSettled([p1, p2]).then((res) => {
        const [r1, r2] = res;
        if(r1.status === "rejected") {
            return Promise.reject(r1.reason);
        }
        if(r2.status === "rejected") {
            return Promise.reject(r2.reason);
        }
    
        const [v1, v2] = [r1.value, r2.value];
    
        if(typeof v1 === "number" && typeof v2 === "number" || typeof v1 === "string" && typeof v2 === "string") {
            return v1 + v2;
        }
        if(Array.isArray(v1) && Array.isArray(v2)) {
            return [...v1, ...v2];
        }
        if(typeof v1 === 'object' && typeof v2 === 'object') {
            return {...v1, ...v2};
        }else {
            return Promise.reject("unsupported data types");
        }
    })

}




try {
    let res = await promiseMerge(Promise.resolve(1), Promise.resolve(2)); // 3
    console.log(res);
    let res2 = await promiseMerge(Promise.resolve('abc'), Promise.resolve('def')); // 'abcdef'
    console.log(res2);
    let res3 = await promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
    console.log(res3, "Array");
    
    let res4 = await promiseMerge(Promise.resolve({ foo: 1 }), Promise.resolve({ bar: 2 })); // { foo: 1, bar: 2}
    console.log(res4, "Object");
    

    let res5 = await promiseMerge(Promise.resolve(1), Promise.resolve([])); // Rejected with 'Unsupported data types'
    // console.log(res5, "unsupported");
    
    let res6 = await promiseMerge(Promise.reject(1), Promise.resolve(2)); // Rejected with 1
    console.log(res6, "rejected promise");
    
}
catch(err) {
    console.log(err, "rejected");
    
}
// await promiseMerge(Promise.resolve('abc'), Promise.resolve('def')); // 'abcdef'
// await promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// await promiseMerge(Promise.resolve({ foo: 1 }), Promise.resolve({ bar: 2 })); // { foo: 1, bar: 2}

// await promiseMerge(Promise.resolve(1), Promise.resolve([])); // Rejected with 'Unsupported data types'
// await promiseMerge(Promise.reject(1), Promise.resolve(2)); // Rejected with 1
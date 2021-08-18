const ires=require('../cacheFunction.js');
function callback(a){
    //console.log("This is callback");
    return a*a;
}
let res=cacheFunction(callback);
console.log(res(2));
// console.log(res(2));
// console.log(res(4));


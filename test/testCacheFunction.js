const ires=require('../cacheFunction.js');
function callback(a){
    // console.log(a);
    // console.log("This is callback");
    return a*a;
}
function sum(a,b){
 
  return a+b*b;
    
}
let result2=cacheFunction(sum);    
let result1=cacheFunction(callback);



 console.log(result1(2));
 console.log(result2(4,5));


 

const {ires}=require('../limitFunctionCallCount');
function callback(){
console.log("Callback Invoked");
 
  }
let n=2;

let res=limitFunctionCallCount(callback,n);
// res(2);
// res();

 
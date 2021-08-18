const {ires}=require('../limitFunctionCallCount');
function callback(){
console.log("Callback Invoked");
  }
let n=1;

let res=limitFunctionCallCount(callback,n);
res();
res();

 
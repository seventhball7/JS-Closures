// function limitFunctionCallCount(cb, n) {
//     // Should return a function that invokes `cb`.
//     // The returned function should only allow `cb` to be invoked `n` times.
//     // Returning null is acceptable if cb can't be returned
// }
module.exports=limitFunctionCallCount=(cb, n)=>{
     let noic=0;
     if(noic>=n){
         return null;
     }
     function invoke(){
         if(noic<n){
             noic+=1;
              cb();
              console.log("count =" + noic);
         }
     }
     
     return invoke;
     
        
 }
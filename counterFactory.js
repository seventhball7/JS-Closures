// function counterFactory() {
//     // Return an object that has two methods called `increment` and `decrement`.
//     // `increment` should increment a counter variable in closure scope and return it.
//     // `decrement` should decrement the counter variable and return it.
// }
module.exports=counterFactory=(currval)=>{
   // let obj={};
    var counter = currval;

    function increment(val){
    counter+=val;  
    return counter;
  }
   function decrement(val){
      counter-=val;
      return counter;
  
}
 
  return {increment : increment, decrement : decrement};  

}

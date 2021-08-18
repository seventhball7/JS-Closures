const {ires}=require('../counterFactory.js');
let res=counterFactory(0);
console.log(res.increment(2));
console.log(res.decrement(3));
 //console.log(res.increment());

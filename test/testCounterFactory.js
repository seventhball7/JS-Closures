const {ires}=require('../counterFactory.js');
let res=counterFactory(0);
console.log(res.increment(1));
console.log(res.decrement(1));
 //console.log(res.increment());

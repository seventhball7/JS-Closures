
module.exports=cacheFunction=(cb)=>{
    let cacheobj={};
    function invoke(n){
       if(n in cacheobj){
           return cacheobj[n];
       }
       else{
           cacheobj[n]=cb(n);
           return cb(n);
       }
         
    }
   return invoke;
       
         
        
    
    
}
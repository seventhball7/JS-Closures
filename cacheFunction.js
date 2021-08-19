
module.exports=cacheFunction=(cb)=>{
    let cacheobj={};
    function invoke(...passedval){
   let arr=passedval.toString();
    // console.log(arr);
   
    if(arr in cacheobj){
        return cacheobj[arr];
    }
    else{
        cacheobj[arr]=cb(...passedval);
       return cacheobj[arr];
       
    }

    }
    
   return invoke;
       
         
        
    
    
}
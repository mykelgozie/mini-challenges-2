function removeDuplicates(obj) {
    stack =[];

    objkeys =    Object.keys(obj)

    objLength =  Object.keys(obj).length;
 
    objkeySort = objkeys.sort(function (a , b) { return a - b; } );
 
 
         for (let index = 0; index < objkeySort.length; index++) {
 
                     let sort = objkeySort[index];
 
            
             for (let b = 0; b <  obj[sort].length; b++) {
             
 
                for (let c= 0; c < objkeySort.length; c++) {
 
                     if(obj[objkeySort[c]].indexOf(obj[sort][b]) < 0 ){
 
                         if(stack.indexOf(obj[sort][b]) < 0){
 
                             stack.push(obj[sort][b]);
 
 
                         }
 
 
                     }
                  
                    
                }  
 
                 
             }
 
             obj[sort] = stack;
             stack =[];
 
                      
         }
 
      
      
    return obj;
 
}

module.exports = removeDuplicates;

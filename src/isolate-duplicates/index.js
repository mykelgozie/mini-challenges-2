function isolateDuplicates(text) {

    if (text == "" ){

        throw "Please enter a valid string";


    }

    let sample = text.split("");
    let pair = 0;
    let stack =  [];
    let final = [];
    let word ;
    let stock =  [];
    let lowerCaseSample = [];

    for (let index = 0; index < sample.length; index++) {


        lowerCaseSample.push(sample[index].toLowerCase());

       
        if (stack.indexOf(sample[index].toLowerCase()) < 0) {

            stack.push(sample[index].toLowerCase());
            
        }
        
    }


            for (let a = 0; a < stack.length; a++) {

                let count = 0 ;
               
                    for (let b = 0; b < lowerCaseSample.length; b++) {
                        

                        
                        if (stack[a] == lowerCaseSample[b]) {

                          
                                
                      
                            count = count + 1;
                            
                            if (count == 2 && (stack[a] == lowerCaseSample[b + 1]) ) {

                                          lowerCaseSample.splice( b +1 , 0, '[');  

                                         

                            } else if ( count <= 2 &&  (stack[a] != lowerCaseSample[b + 1])){


                                count = 0;
                            }

                         


                             if ( count > 2  && (stack[a] != lowerCaseSample[b+1])  ){

                                pair = pair + 1;
                                count = 0;

                                stock.push(count);
 
                                
                                lowerCaseSample.splice(b +1, 0, ']');

                                count = 0;
                      
                                
                              

                                

                                   
                                   
                                
                                


                             }
                        

                        
                        
                            
                            
                        }
                        
                        
                        
                    }

                
            }

           



         
            


            for (let c = 0; c < lowerCaseSample.length; c++) {
              
                if (lowerCaseSample[c] == '[') {

                    sample.splice(c,0, '[');
                    
                } else if( lowerCaseSample[c] == ']'){

                    sample.splice(c, 0, ']')
                }

        }

        word = sample.join("");
        final[0] = word;
        final[1] = pair;
        return final;

  
  

    



}

module.exports = isolateDuplicates;

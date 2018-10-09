 let array =[3,4,1,2,-1,-1,0];
     let min= array[0];
let smin =array[0];
      for(let i=0;i<array.length-1;i++){
        
             for(j=i+1;j<array.length;j++){
               
               if(array[j]< min){
                 
                 min =array[j];
                 console.log('fmin'+min)
                 
              
                 
               }
               console.log('smin before '+smin);
                  if( array[j]>min  && array[j]<smin ){
                                  
                 smin= array[j];
                 console.log('smin chnages '+smin);
               }
                 
               
             }
      }

console.log('f min'+min);








console.log('s min'+smin);

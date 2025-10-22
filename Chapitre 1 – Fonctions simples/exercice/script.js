
function max (a, b, c) {
    if (a >= b && a >= c) {
       return a;
    } 
    
    else if (b >= a && b >= c)
    {
       return b ;
   }
    else {
       return c; 
   }
   }
   let message = max(3, 100, 150);
   alert("Le grand nombre est : " + message);
   
     
   
   
   
    
   
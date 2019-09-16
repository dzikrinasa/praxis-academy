function tc()
{
   var winPoints = 3;
   var drawPoints = 1;
   
   try{
      if ( drawPoints == 1 ){
         throw( "Real Madrid will not qualify." ); 
      }
      
      else
      {
         var qualification = winPoints + drawPoints;
      }
   }
   
   catch ( e ) {
      alert("Error: " + e );
   }
}


let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors
  alert( user.name ); // no name!

} catch (e) {
  alert( "doesn't execute" );
}
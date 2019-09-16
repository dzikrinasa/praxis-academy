function trycatch() {
    var passenger = 50;
    try {
      alert("The coach can sit " + passenger + " people.");
    } catch (e) {
      alert("Error: " + e.description);
    }
  }

  function readData() {
    let json = '{ "age": 30 }';
  
    try {
      // ...
      blabla(); // error!
    } catch (e) {
      // ...
      if (e.name != 'SyntaxError') {
        throw e; // rethrow (don't know how to deal with it)
      }
    }
  }
  
  try {
    readData();
  } catch (e) {
    alert( "External catch got: " + e ); // caught it!
  }

  try {
    lalala; // error, variable is not defined!
  } catch(err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: lalala is not defined
  }
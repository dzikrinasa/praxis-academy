function f() {
    try {
      alert('start');
      return "result";
    } catch (e) {
      /// ...
    } finally {
      alert('cleanup!');
    }
  }
  
  f();
  
  
function fu() {
    try {
      alert('start');
      throw new Error("an error");
    } catch (e) {
      // ...
      if("can't handle the error") {
        throw e;
      }
  
    } finally {
      alert('cleanup!')
    }
  }
  
  ; // cleanup!
// function numberToString(n, base = 10) {
//     let result = "", sign = "";
//     if (n < 0) {
//       sign = "-";
//       n = -n;
//     }
//     do {
//       result = String(n % base) + result;
//       n /= base;
//     } while (n > 0);
//     return sign + result;
//   }
//   console.log(numberToString(13, 10));

//   function promptDirection(question) {
//     let result = prompt(question);
//     if (result.toLowerCase() == "left") return "L";
//     if (result.toLowerCase() == "right") return "R";
//     throw new Error("Invalid direction: " + result);
//   }
  
//   function look() {
//     if (promptDirection("Which way?") == "L") {
//       return "a house";
//     } else {
//       return "two angry bears";
//     }
//   }
  
//   try {
//     console.log("You see", look());
//   } catch (error) {
//     console.log("Something went wrong: " + error);
//   }

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
    for (;;) {
         try {
             return primitiveMultiply(a, b);
         } catch(e){
             if(!(e instanceof MultiplicatorUnitFailure)) 
             throw e;
         }
      }
}

console.log(reliableMultiply(8, 8));
// → 64

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    let locked = box.locked;
    if(!locked){
        return body();
    }
    box.unlock();
    try{
        return body();
    } finally{
        box.lock();
    }
  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  console.log(box.locked);
  // → true
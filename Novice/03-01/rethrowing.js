let jeson = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(jeson); // <-- forgot to put "let" before user

  // ...
} catch(err) {
  alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (no JSON Error actually)
}
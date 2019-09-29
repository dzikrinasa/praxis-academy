
    function unique(arr) {
        return Array.from(new Set(arr));
      }
      
      let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
      ];
      
      alert( unique(values) ); // Hare, Krishna, :-O
      
          let map = new Map();
      
      map.set('1', 'str1');   // a string key
      map.set(1, 'num1');     // a numeric key
      map.set(true, 'bool1'); // a boolean key
      
      // remember the regular Object? it would convert keys to string
      // Map keeps the type, so these two are different:
      alert( map.get(1)   ); // 'num1'
      alert( map.get('1') ); // 'str1'
      
      alert( map.size ); // 3
      
      let recipeMap = new Map([
        [' cucumber ', 500],
        [' tomatoes ', 350],
        [' onion ',    50]
      ]);
      
      // iterate over keys (vegetables)
      for (let vegetable of recipeMap.keys()) {
        document.write(vegetable); // cucumber, tomatoes, onion
      }
      
      // iterate over values (amounts)
      for (let amount of recipeMap.values()) {
        document.write(amount); // 500, 350, 50
      }
      
      // iterate over [key, value] entries
      for (let entry of recipeMap) { // the same as of recipeMap.entries()
        document.write(entry); // cucumber,500 (and so on)
      }
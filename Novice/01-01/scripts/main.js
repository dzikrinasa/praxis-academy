let myHeading = document.querySelector('h1');


let myButton = document.querySelector('button');


function setUserName() {
  let myName = prompt('Silahkan Masukan Nama Anda :');
  localStorage.setItem('name', myName);
  myHeading.textContent = ' Nama Anda Adalah, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = myHeading.textContent = 'Selamat Datang!';
  myHeading.textContent = 'Hi, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

var board = "";
for(var i = 0; i < 8; i++){
 for(var a = 0; a < 8; a++){
  board += (a % 2) == (i % 2) ? " " : "#";
 }
 board += "\n";
}

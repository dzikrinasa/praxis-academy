function calculateSupply(age, numPerDay) {
    age=prompt("Umur Anda?");
    numPerDay=prompt("Makan Berapa kali PerHari");

  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'Kamu perlu Makan sebanyak ' + totalNeeded + ' kali untuk Mencapai Umur ' + maxAge + ' Tahun ';
  console.log(message);
  document.write(message);
  }

  calculateSupply();
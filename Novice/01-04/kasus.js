var reg = /(\w+)\@(\w+)\.(\w+)/g;
        function testInfo(emailInput) {
          var OKE = reg.exec(emailInput.value);
          if (!OKE)
            window.alert(emailInput.value + ' Email yang anda inputkan salah');
          else
            window.alert('Hallo Username Anda Adalah ' + OKE[1] + ' domain anda adalah '+ OKE[2] +'.'+ OKE[3]);
        }
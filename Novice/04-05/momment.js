moment().format('MMMM Do YYYY, h:mm:ss a'); // September 29th 2019, 2:49:50 pm
moment().format('dddd');                    // Sunday
moment().format("MMM Do YY");               // Sep 29th 19
moment().format('YYYY [escaped] YYYY');     // 2019 escaped 2019
moment().format();                          // 2019-09-29T14:49:50+07:00

moment("20111031", "YYYYMMDD").fromNow(); // 8 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 7 years ago
moment().startOf('day').fromNow();        // 15 hours ago
moment().endOf('day').fromNow();          // in 9 hours
moment().startOf('hour').fromNow();       // an hour ago

moment().subtract(10, 'days').calendar(); // 09/19/2019
moment().subtract(6, 'days').calendar();  // Last Monday at 2:50 PM
moment().subtract(3, 'days').calendar();  // Last Thursday at 2:50 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 2:50 PM
moment().calendar();                      // Today at 2:50 PM
moment().add(1, 'days').calendar();       // Tomorrow at 2:50 PM
moment().add(3, 'days').calendar();       // Wednesday at 2:50 PM
moment().add(10, 'days').calendar();      // 10/09/2019

moment.locale();         // en
moment().format('LT');   // 2:50 PM
moment().format('LTS');  // 2:50:20 PM
moment().format('L');    // 09/29/2019
moment().format('l');    // 9/29/2019
moment().format('LL');   // September 29, 2019
moment().format('ll');   // Sep 29, 2019
moment().format('LLL');  // September 29, 2019 2:50 PM
moment().format('lll');  // Sep 29, 2019 2:50 PM
moment().format('LLLL'); // Sunday, September 29, 2019 2:50 PM
moment().format('llll'); // Sun, Sep 29, 2019 2:50 PM
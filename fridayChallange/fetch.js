fetch('https://api.openweathermap.org/data/2.5/weather?q=Kaunas,lt&APPID=29039c616587a255fa186551ad190d76')
.then(res => res.json())
.then(data => console.log('Temperatūra Kaune:', data.main.temp-273.15, 'Celsijaus', 'Vėjo greitis Kaune:', data.wind.speed, 'm/s'))
.catch(error => console.log('ERROR'))

// console.log(temp);

// .then(res => {
//     if (res.ok) {
//         console.log('SUCCESS')
//     } else {
//         console.log("Not Success")
//     }
// }
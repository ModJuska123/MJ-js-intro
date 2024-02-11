fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={29039c616587a255fa186551ad190d76}')
// .then(res => {
//     if (res.ok) {
//         console.log('SUCCESS')
//     } else {
//         console.log("Not Success")
//     }
// }
// )
.then(res => res.text())
.then(data => console.log(data))
.catch(error => console.log('ERROR'))
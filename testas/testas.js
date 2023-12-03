// const input = '328702744723486911532475768422255001894526113116325060007961735316660332370078413228044719094265596322238541795017994255633388010154191613037999755961333112';
// for (let i = 0; i < input.length; i++) {
// const poros = input[i] + input[i+1];
// console.log(poros);




const input = '328702744723486911532475768422255001894526113116325060007961735316660332370078413228044719094265596322238541795017994255633388010154191613037999755961333112';

// const poros = [];

// for (let i = 0; i < 100; i++) {
//     poros.push(0);    
// }

// for (let i = 0; i < input.length - 1; i++) {
//     const pora = parseInt(input[i] + input[i + 1]);
//     poros[pora]++;
   
// }
// console.log(poros)

// const maxKiekis = Math.max(...poros);

// for (let i = 0; i < 100; i++) {
//     if (poros[i] === maxKiekis) {
//         console.log("labiausiai besikartojantis sk.:", i);
//     }
// }

const poros = {};
for (let i = 0; i < input.length - 1; i++) {
    const nr = input[i] + input[i + 1];
    if (poros[nr]) {poros[nr]++;      
    } else {poros[nr] = 1
    }
}
let maxKiekis = 0;

for (const key in poros) {
    if (poros[key] > maxKiekis) {
        maxKiekis = poros[key];
        
    }
}
console.log(maxKiekis);

const maxPoros = [];

for(const key in poros) {
    if (poros[key] === maxKiekis) {
        maxPoros.push(key);
        
    }
} 
console.log(maxPoros);





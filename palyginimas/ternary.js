// uzd -> nuo kad galima i bara

const amzius = 45;
const limitas = 18;

let zinute = '';

if(amzius < limitas) {zinute = 'Sorry...'
} else {
    zinute = 'Useik!';
}

console.log('>>>>>>>', zinute);

// ternary - trejybe -> uzdavinio tesinys -> sumazina kodo dydi

const zinute3 = amzius < limitas ? 'Sorry...' : 'Uzeik!...';
console.log('>>>>>>>', zinute3);


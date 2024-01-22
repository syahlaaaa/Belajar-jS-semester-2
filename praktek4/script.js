
let BeratMadan = 60;
let TinggiMadan = 1.6;

let BeratJoan = 64;
let TinggiJoan = 1.65;

const IMTMadan = BeratMadan / TinggiMadan ** 2 ;
const IMTJoan = BeratJoan / TinggiJoan ** 2 ;

const MadanHigherIMT = IMTMadan > IMTJoan;
console.log("IMT Madan : " + IMTMadan.toFixed(1));
console.log("IMT Joan : " + IMTJoan.toFixed(1));

if(IMTMadan > IMTJoan){
    console.log(`Nilai Madan ${IMTMadan.toFixed(1)} lebih tinggi dari Joan ${IMTJoan.toFixed(1)}`)
}
else{
    console.log(`Nilai Joan ${IMTJoan.toFixed(1)} lebih tinggi dari Madan ${IMTMadan.toFixed(1)} `)
}



let BeratMadan = 60;
let TinggiMadan = 1.6;

let BeratJoan = 64;
let TinggiJoan = 1.65;

const IMTMadan = BeratMadan / TinggiMadan ** 2 ;
const IMTJoan = BeratJoan / TinggiJoan ** 2 ;

const MadanHigherIMT = IMTMadan > IMTJoan;
console.log("IMT Madan : " + IMTMadan);
console.log("IMT Joan : " + IMTJoan);



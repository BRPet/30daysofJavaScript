let myAge = 49;
let yourAge = prompt("Informe sua idade:");
let difAge = yourAge - myAge;

if (yourAge > myAge) {
  console.log(`Voce e mais velho do que eu: ${difAge} anos.`);
} else if (yourAge < myAge) {
  console.log(`Voce e mais jovem do que eu: ${difAge} anos.`);
} else {
  console.log("Voce tem a mesma idade que a minha.");
}

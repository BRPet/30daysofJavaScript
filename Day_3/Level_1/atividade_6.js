console.log(4 > 3 && 10 < 12); //true;
console.log(4 > 3 && 10 > 12); //true && false = false
console.log(4 > 3 || 10 < 12); // true || true = true
console.log(4 > 3 || 10 > 12); // true || false = true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //!(true&&true) = false
console.log(!(4 > 3 && 10 > 12)); //!(true&&false) = true
console.log(!(4 === "4")); // true
console.log(!("dragon".includes("on") && "python".includes("on"))); //!(true&&true)= false

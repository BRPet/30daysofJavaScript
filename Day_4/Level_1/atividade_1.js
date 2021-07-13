let age = prompt("Qual sua idade?");
let ageless = age - 18;

if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You are left with ${ageless} years to drive.`);
}

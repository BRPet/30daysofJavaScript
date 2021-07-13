let monthInput = prompt("Informe month: ");
let month = monthInput.toLowerCase();

if (month == "september" || month == "october" || month == "november") {
  console.log("Season is Autum");
} else if (month == "december" || month == "january" || month == "february") {
  console.log("Season is Winter");
} else if (month == "march" || month == "april" || month == "may") {
  console.log("Season is Spring");
} else if (month == "june" || month == "july" || month == "august") {
  console.log("Season is Summer");
} else {
  console.log("Month not exists");
}

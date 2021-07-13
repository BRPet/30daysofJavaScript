let dayInput = prompt("What is the day today?");
let day = dayInput.toLowerCase();

if (day == "sunday" || day == "saturday") {
  console.log(`${day} is a weekend.`);
} else if (
  day == "monday" ||
  day == "tuesday" ||
  day == "wednesday" ||
  day == "thursday" ||
  day == "friday"
) {
  console.log(`${day} is a working day.`);
} else {
  console.log("Day not exists.");
}

var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// Your code here

// Lesson 3, Step 5 Skillcrush JS Fundamentals Class

// What Day Is It? Challenge

// console.log(weekday);

if (weekday === "Monday") {
  console.log("Let's get this week started!");
} else if (weekday === "Tuesday") {
  console.log(`Worky work!`);
} else if (weekday === "Wednesday") console.log(`Happy hump day!`);
else if (weekday === "Thursday") {
  console.log(`It is Friday Eve!`);
} else if (weekday === "Friday") {
  console.log(`Weekend’s almost here!`);
} else {
  console.log(`WEEKEND, YAYYY!!!`);
}

let seasons = ["Spring 2019", "Winter 2019", "Summer 2019", "Fall 2019"];
let seasonOrder = { "Winter 2019": 0, "Fall 2019": 1, "Summer 2019": 2, "Spring 2019": 3 }; 
seasons.sort((a, b) => seasonOrder[a] - seasonOrder[b]); 

console.log(seasons); 

// let seasons1 = ["Spring: 3", "Winter: 1", "Summer: 4", "Fall: 2"];
// seasons1.sort((a, b) => a.split(": ")[1] - b.split(": ")[1]);

// console.log("season", seasons1);

//Sort season winter, fall, summer, spring and by year with the most recent first

// let seasons2 = ['Spring: 2019', 'Winter: 2018', 'Summer: 2019', 'Fall: 2018'];
// seasons2.sort((a, b) => {
//   let [seasonA, yearA] = a.split(": ");
//   let [seasonB, yearB] = b.split(": ");
//   let seasonOrder = { "Winter": 0, "Fall": 1, "Summer": 2, "Spring": 3 }; 
//   console.log("seasonOrder", seasonOrder[seasonA] - seasonOrder[seasonB] || yearB - yearA)
//   return seasonOrder[seasonA] - seasonOrder[seasonB] || yearB - yearA;
// });





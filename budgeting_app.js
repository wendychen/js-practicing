# Budgeting App
# Reference: https://mimo.org/web/track/211/tutorial/1732/chapter/11582/project?lesson=11

const budget = 62000 * 6;

const savingPriority = "high";
const rent = 7000;
const utilities = 15000;
const newLaptop = 40000;

const totalCosts = rent + utilities;
const budgetLeft = budget - totalCosts;
const buyLaptop = budgetLeft >= newLaptop ? true : false;

console.log("New Laptop Within Budget:");
console.log(buyLaptop);
console.log("Postpone Purchase and Save Instead:");
console.log(savingPriority === "high");

/* Created this file to help with the Recipe Data.
- Moved the console log tests to this file so see the outcome.
- Some functions can be passed to the recipe pages.
*/
import { data } from "./data.js";

//This function is used in the recipy search, to filter out the cards.
export const healthFilter = (healthList, searchField) => {
  let healthTag = [];
  for (const perItem of healthList) {
    if (searchField.includes(perItem)) {
      healthTag.push(perItem);
    }
  }
  return healthTag;
};

//Function to make unique lists:

/* Disabled
function uniqueList(itemList) {
  let uniqueItems = [];
  for (const perItem of itemList) {
    //destructuring the name before adding
    if (!uniqueItems.includes(perItem)) {
      uniqueItems.push(perItem);
    }
  }
  return uniqueItems;
}*/

// This function got discontinues, as a better way of dealing with healthlabel search was made.
//Return all possible healthlabels:
export const healthLabels = (nutrientlist) => {
  let flatNutrient = nutrientlist.indexOf("label");
  return flatNutrient;
};

//Testing with vatiables, and console logs:
const searchField = ["Vegan", "Vegetarian"];
const RecipeTester = data.hits[0].recipe;
const HealthLabels = RecipeTester.healthLabels;
const nutrientHelper = RecipeTester.totalNutrients;

//console logging to view the outcome:
console.log(healthFilter(HealthLabels, searchField));
//console.log(data.hits[0].recipe);
console.log(nutrientHelper);

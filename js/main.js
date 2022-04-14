"use strict";
import recipes from "./recipes.js"

//variables that can be declared at top

let ingredients = [];
let appliances = [];
let ustensils = [];
const input = document.querySelector(".searchbar-input");
const ingredientsSelect = document.querySelector(".ingredientElts");
const applianceSelect = document.querySelector(".applianceElts");
const ustensilsSelect = document.querySelector(".ustensilsElts");


//------Getting the ingredients------
recipes.forEach(recipe=>{
    recipe.ingredients.forEach(allIngredients=>{
        ingredients.push(allIngredients.ingredient.toLowerCase())
    });
    appliances.push(recipe.appliance.toLowerCase());
    recipe.ustensils.forEach(allUstensils=>{
        ustensils.push(allUstensils.toLowerCase());
    })
})
// creating sets to get rid of duplicates
const uniqueSet = new Set(ingredients);
const applianceSet = new Set(appliances);
const ustensilsSet = new Set(ustensils);
//Put the set elements into a new array
const ingredientList = [...uniqueSet];
const applianceList = [...applianceSet];
const ustensilsList = [...ustensilsSet];

//Functions to add html nodes
const displayIngredients =(ingredientList, node) => {
    node.innerHTML = "";
    ingredientList.forEach(element => {
        node.innerHTML += `<span class="ingredient-tag">${element}</span>&nbsp;`;
    });
}
const displayAppliance =(applianceList, node) => {
    applianceList.forEach(element => {
        node.innerHTML += `<span class="ingredient-tag">${element}</span>&nbsp;`;
    });
}
const displayUstensils = (ustensilsList, node) => {
    ustensilsList.forEach(element => {
        node.innerHTML += `<span class="ingredient-tag">${element}</span>&nbsp;`;
    })
}

//display the ingredients in html
displayIngredients(ingredientList, ingredientsSelect);
displayAppliance(applianceList, applianceSelect);
displayUstensils(ustensilsList, ustensilsSelect);

// console.log(ingredientList);
// console.log(applianceList);
// console.log(ustensilsList);
//Event listener on input
input.addEventListener("input", (e)=>{
    //console.log(e.target.value);
    const searchInput = e.target.value;
    const filteredIngredients = ingredientList.filter((ingredient)=> {
       for(let i = 0; i < ingredient.length; i++){
        if(ingredient.includes(searchInput)) {
            //console.log("toto");
            return true;
        }
        return false;
    } 
    });
    console.log(filteredIngredients);
    displayIngredients(filteredIngredients, ingredientsSelect)
})
const cocktailList = () => document.getElementById('cocktail-list')
const form = () => document.querySelector('form')
const cocktailName = () => document.querySelector('input#cocktail-name')
const cocktailDescription = () => document.querySelector('textarea#cocktail-description')
const submitButton = () => document.getElementById('submit-cocktail')
const ingredientList = () => document.getElementById('ingredient-list')
const ingredientCheckboxes = () => document.querySelectorAll('input[type="checkbox"]')

const baseUrl = 'http://localhost:3000'

let editing = false
let editedCocktailId = null;
let editedIngredientId = null;

document.addEventListener('DOMContentLoaded', callOnLoad)

function callOnLoad() {
    loadCocktails();
    loadIngredients();
    form().addEventListener('submit', createCocktail)
}

function loadCocktails() {
    fetch(baseUrl + '/cocktails.json')
        .then(resp => {
            if (resp.status !== 200) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .catch(errors => console.log(errors))
        .then(data => displayCocktails(data))
}

function displayCocktails(cocktails) {
    cocktails.forEach(cocktail => {
        cocktail = new Cocktail(cocktail.id, cocktail.name, cocktail.description)
        cocktailList().appendChild(cocktail.renderCocktail())
    })
}

function createCocktail(e) {
    e.preventDefault()

    if (editing) {
        updateCocktail();
    } else {
        const strongParams = {
            cocktail: {
                id: this.value,
                name: cocktailName().value,
                description: cocktailDescription().value,
                ingredient_ids: ingredientCheckbox()
                // ingredients_attributes: (this will be with accepts nested attributes)
            }
        }
        fetch(baseUrl + '/cocktails.json', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
        })
            .then(resp => resp.json())
            .then(cocktail => {
                cocktail = new Cocktail(cocktail.id, cocktail.name, cocktail.description)
                cocktailList().appendChild(cocktail.renderCocktail())
            })
        resetInputs();
    }
}

function editCocktail() {
    editing = true;

    cocktailName().value = this.parentNode.querySelector('h4').innerText
    cocktailDescription().value = this.parentNode.querySelector('p').innerText
    // WILL NEED TO ADD THE INGREDIENTS CHECKED
    submitButton().value = "Edit Cocktail"

    editedCocktailId = this.id;
}

function updateCocktail(c) {
    let name = document.querySelector('#cocktail-name').value;
    let description = cocktailDescription().value;

    const strongParams = {
        cocktail: {
            name: name,
            description: description,
            ingredient_ids: ingredientCheckbox()
        }
    }

    fetch(baseUrl + '/cocktails/' + editedCocktailId, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(strongParams)
    })
        .then(resp => resp.json())
        .then(data => {
            const div = document.getElementById(editedCocktailId).parentNode

            div.querySelector('h4').innerText = data.name
            div.querySelector('p').innerText = data.description

            resetInputs();
            editing = false;
            editedCocktailId = null;
            submitButton().value = "Create Cocktail"
        })
}

function deleteCocktail(e) {
    this.id
    this.parentNode

    fetch(baseUrl + '/cocktails/' + this.id, {
        method: 'DELETE'
    })
        .then(resp => {
            this.parentNode.remove()
        })
}

function resetInputs() {
    cocktailName().value = "";
    cocktailDescription().value = "";
}

function loadIngredients() {
    fetch(baseUrl + '/ingredients.json')
        .then(resp => {
            if (resp.status !== 200) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .catch(errors => console.log(errors))
        .then(data => displayIngredients(data))
}

function displayIngredients(ingredients) {
    ingredients.forEach(ingredient => {
        ingredient = new Ingredient(ingredient.id, ingredient.name)
        ingredientList().appendChild(ingredient.renderIngredient())
    })
}

function ingredientCheckbox() {
    let checkedIngredientArray = []
    ingredientCheckboxes().forEach(ingredient => {
        if (ingredient.checked) {
            checkedIngredientArray.push(ingredient.id)
        }
    })
    return checkedIngredientArray
}

// function editIngredient() {
//     let editedIngredientId = this.id
    
//     const strongParams = {
//         ingredient: {
//             name: name
//         }
//     }

//     fetch(baseUrl + '/ingredients/' + editedIngredientId, {
//         method: "PATCH",
//         headers: {
//             "Accept": "applicaiton/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(strongParams)
//     })
//         .then(resp => resp.json())
//         .then(ingredient => {

//         })
// }

// function deleteIngredient(e) {
//     this.id
//     this.parentNode
    
//     fetch(baseUrl + '/ingredients/' + this.id, {
//         method: 'DELETE'
//     })
//         .then(resp => {
//             this.parentNode.remove()
//         })
// }

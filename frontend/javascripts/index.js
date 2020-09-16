const cocktailList = () => document.getElementById('cocktail-list')
const form = () => document.querySelector('form')
const cocktailName = () => document.querySelector('input#cocktail-name')
const cocktailDescription = () => document.querySelector('textarea#cocktail-description')
const submitButton = () => document.getElementById('submit-cocktail')


const baseUrl = 'http://localhost:3000'

let editing = false
let editedCocktailId = null;

document.addEventListener('DOMContentLoaded', callOnLoad)

function callOnLoad() {
    loadCocktails();
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
                description: cocktailDescription().value
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
        // Cocktail {id: 1, name: "Old Fashioned", description: "Delicious"}
    }
}

function editCocktail() {
    editing = true;

    cocktailName().value = this.parentNode.querySelector('h4').innerText
    cocktailDescription().value = this.parentNode.querySelector('p').innerText
    submitButton().value = "Edit Cocktail"

    editedCocktailId = this.id;
}

function updateCocktail(c) {
    let name = document.querySelector('#cocktail-name').value;
    let description = cocktailDescription().value;

    const strongParams = {
        cocktail: {
            name: name,
            description: description
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
    // debugger
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


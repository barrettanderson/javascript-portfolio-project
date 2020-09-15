const cocktailList = () => document.getElementById('cocktail-list')
const form = () => document.querySelector('form')
const cocktailName = () => document.querySelector('input#cocktail-name')
const cocktailDescription = () => document.querySelector('textarea#cocktail-description')
const submitButton = () => document.getElementById('submit-cocktail')

const baseUrl = 'http://localhost:3000'

let editing = false

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
    const strongParams = {
        cocktail: {
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
            renderCocktail(cocktail)
        })
    resetInputs();
}

function editCocktail() {

}

function resetInputs() {
    cocktailName().value = "";
    cocktailDescription().value = "";
}
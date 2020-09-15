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
    cocktails.forEach(cocktail => displayCocktail(cocktail))
}

function displayCocktail(cocktail) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    // const deleteButton = document.createElement('button')
    // const editButton = document.createElement('button')

    h4.innerText = cocktail.name
    p.innerText = cocktail.description

    div.appendChild(h4)
    div.appendChild(p)
    cocktailList().appendChild(div)
}

function createCocktail(e) {
    e.preventDefault()
    debugger;
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
            displayCocktail(cocktail)
        })
    resetInputs();
}

function resetInputs() {
    cocktailName().value = "";
    cocktailDescription().value = "";
}
const baseUrl = 'http://localhost:3000'

document.addEventListener('DOMContentLoaded', callOnLoad)

function callOnLoad() {
    loadCocktails()
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
    cocktails.forEach(cocktail => displayCocktails(cocktail))
}

function displayCocktail(cocktail) {
    const div = document.createElement('div')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')
    // const deleteButton = document.createElement('button')
    // const editButton = document.createElement('button')

    h4.innerText = cocktail.name
    p.innerText = cocktail.description

    div.appendChild(h4)
    div.appendChild(p)
}
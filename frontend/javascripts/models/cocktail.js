class Cocktail {
    constructor(id, name, description, ingredients) {
        this.id = id
        this.name = name
        this.description = description
        this.ingredients = ingredients
    }

    renderCocktail() {
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')
        const ul = document.createElement('ul')
        const liIngredients = document.createElement('li')
    
        editButton.classList.add('btn');
        editButton.innerText = 'edit';
        editButton.id = this.id
        editButton.addEventListener('click', editCocktail)

        deleteButton.classList.add('btn');
        deleteButton.innerText = 'delete';
        deleteButton.id = this.id
        deleteButton.addEventListener('click', deleteCocktail)

        h4.innerText = this.name

        p.innerText = `Description - ${this.description}`

        ul.innerText = "Ingredients"
        liIngredients.id = "ingredient-text"
        liIngredients.innerText = `${this.ingredients.map( ing => ing.name)}`
    
        div.appendChild(h4)
        div.appendChild(p)
        div.appendChild(ul)
        div.appendChild(liIngredients)

        return div
    }

}
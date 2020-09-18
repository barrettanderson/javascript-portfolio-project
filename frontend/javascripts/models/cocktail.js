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
        
        editButton.classList.add('btn');
        editButton.innerText = 'edit';
        editButton.id = this.id
        editButton.addEventListener('click', () => editCocktail(this))
        
        deleteButton.classList.add('btn');
        deleteButton.innerText = 'delete';
        deleteButton.id = this.id
        deleteButton.addEventListener('click', deleteCocktail)
        
        h4.innerText = this.name
        h4.id = `c-name-${this.id}`
        
        p.innerText = this.description
        p.id = `c-description-${this.id}`
        
        ul.innerText = "Ingredients"
        ul.id = `ing-l-${this.id}`
        
        
        this.ingredients.forEach( ing => {
            const li = document.createElement('li')
            li.innerText = ing.name
            li.className = 'ingredient-text'
            ul.appendChild(li)
        })
 
    
        div.appendChild(h4)
        div.appendChild(p)
        div.appendChild(ul)
        div.appendChild(editButton)
        div.appendChild(deleteButton)

        return div
    }

}
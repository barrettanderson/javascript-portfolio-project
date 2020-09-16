class Cocktail {
    constructor(id, name, description) {
        this.id = id
        this.name = name
        this.description = description
    }

    renderCocktail() {
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')
    
        editButton.classList.add('btn');
        editButton.innerText = 'edit';
        editButton.id = this.id
        editButton.addEventListener('click', editCocktail)
    
        h4.innerText = this.name
        p.innerText = this.description
    
        div.appendChild(h4)
        div.appendChild(p)
        div.appendChild(editButton)
        div.appendChild(deleteButton)

        return div
    }

    createCocktail(){ 
        cocktail = new Cocktail(name, description)
    }
}
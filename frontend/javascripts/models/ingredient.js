class Ingredient {
    constructor(id, name) {
    this.id = id,
    this.name = name
    }

    renderIngredient() {
        const label = document.createElement('label');
        // I want to create a collection select that has all ingredients
        // currently found or create a new one
        // const p = document.createElement('p')
        const checkbox = document.createElement('input');
        const span = document.createElement('span')
        // const editButton = document.createElement('button')
        // const deleteButton = document.createElement('button')

        // editButton.classList.add('butn')
        // editButton.innerText = 'edit'
        // editButton.id = this.id
        // editButton.addEventListener('click', editIngredient)

        // deleteButton.classList.add('btn')
        // deleteButton.innerText = 'delete'
        // deleteButton.id = this.id
        // deleteButton.addEventListener('click', deleteIngredient)

        // p.name = this.name
        checkbox.type = "checkbox"
        checkbox.className = "filled-in"
        checkbox.name = this.name
        checkbox.id = this.id
        span.innerText = this.name   
        // div.appendChild(p)
        label.appendChild(checkbox)
        label.appendChild(span)
        // label.appendChild(editButton)
        // label.appendChild(deleteButton)

        return label
    }

    
}
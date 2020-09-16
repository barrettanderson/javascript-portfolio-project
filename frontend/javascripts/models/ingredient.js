class Ingredient {
    constructor(id, name) {
    this.id = id,
    this.name = name
    }

    loadIngredients() {
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

    displayIngredients(ingredients) {
        ingredients.forEach(ingredient => {
            ingredient = new Ingredient(ingredient.id, ingredient.name)
            ingredientList().appendChild(ingredient.renderIngredient())
        })
    }

    renderIngredient() {
        const div = document.createElement('div');
        // I want to create a collection select that has all ingredients
        // currently found or create a new one
        const checkbox = document.createElement('checkbox');
        const span = document.createElement('span')
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        editButton.classList.add('butn')
        editButton.innerText = 'edit'
        editButton.id = this.id
        editButton.addEventListener('click', editIngredient)

        deleteButton.classList.add('btn')
        deleteButton.innerText = 'delete'
        deleteButton.id = this.id
        deleteButton.addEventListener('click', deleteIngredient)

        checkbox.name = this.name
        checkbox.id = this.id
        span.innerText = this.name
        
        div.appendChild(checkbox)
        div.appendChild(span)

    }

    editIngredient() {

    }

    deleteIngredient() {
        
    }
}
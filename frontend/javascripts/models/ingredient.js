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

    }
}
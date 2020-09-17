class Ingredient {
    constructor(id, name) {
    this.id = id,
    this.name = name
    }

    // loadIngredients() {
    //     debugger;
    //     fetch(baseUrl + '/ingredients.json')
    //         .then(resp => {
    //             if (resp.status !== 200) {
    //                 throw new Error(resp.statusText)
    //             }
    //             return resp.json()
    //         })
    //         .catch(errors => console.log(errors))
    //         .then(data => displayIngredients(data))
    // }

    // displayIngredients(ingredients) {
    //     ingredients.forEach(ingredient => {
    //         ingredient = new Ingredient(ingredient.id, ingredient.name)
    //         ingredientList().appendChild(ingredient.renderIngredient())
    //     })
    // }

    renderIngredient() {
        const div = document.createElement('div');
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
        checkbox.name = this.name
        checkbox.id = this.id
        span.innerText = this.name
        // div.appendChild(p)
        div.appendChild(checkbox)
        div.appendChild(span)
        // div.appendChild(editButton)
        // div.appendChild(deleteButton)

        return div
    }

//     editIngredient() {
//         const strongParams = {
//             ingredient: {
//                 name: name
//             }
//         }

//         fetch(baseUrl + '/ingredients' + editedIngredientID, {
//             method: "PATCH",
//             headers: {
//                 "Accept": "applicaiton/json",
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(strongParams)
//         })
//             .then(resp => resp.json())
//             .then(ingredient => {

//             })
//     }

//     deleteIngredient() {

//     }
}
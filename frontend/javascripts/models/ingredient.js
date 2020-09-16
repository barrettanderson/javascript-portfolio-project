class Ingredient {
    constructor(id, name) {
    this.id = id,
    this.name = name
    }

    function loadIngredients() {
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
}
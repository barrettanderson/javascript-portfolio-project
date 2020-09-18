class Ingredient {
    constructor(id, name) {
    this.id = id,
    this.name = name
    }

    renderIngredient() {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        const span = document.createElement('span')
 
        checkbox.type = "checkbox"
        checkbox.className = "filled-in"
        checkbox.name = this.name
        checkbox.id = this.id

        span.innerText = this.name   

        label.appendChild(checkbox)
        label.appendChild(span)


        return label
    }
}
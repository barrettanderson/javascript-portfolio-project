testing

Join table for the ingredients and the cocktail.
    This could have the id of the ingredient and the cocktail and then the measurement

Cocktail (has_many ingredients through: :ingredientcocktailjointableextraordinaire)
    (id)
    name
    description/history

Join Table - (belongs_to cocktail, belongs_to ingredient)
    (id)
    cocktail_id
    ingredient_id
    measurement - string

Ingredients (has_many cocktails through :ingredientcocktailjointableextraordinaire)
    (id)
    name
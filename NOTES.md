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

Questions for Laura
    Form for creating cocktail
    How am I integrating the join table model in the objects themselves?  Right now I have just cocktails, but where do ingredients come into play, and theen the join table
    OO Javascript
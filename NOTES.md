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
 
    Making the backend objects also be js objects
    How am I integrating the join table model in the objects themselves?  Right now I have just cocktails, but where do ingredients come into play, and theen the join table
    OO Javascript - 

    How do I want to encapsulate the logic in rendering my ingredients.

    Laura had a class called form.  These only had static methods(class level methods)

    Ingredients - Find or create by method
    How to render the json - (use include keyword)
    Accepts nested attributes
        If they add ingredients

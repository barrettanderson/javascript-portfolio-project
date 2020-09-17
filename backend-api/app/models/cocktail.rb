class Cocktail < ApplicationRecord
    has_many :mixers
    has_many :ingredients, through: :mixers
    accepts_nested_attributes_for :ingredients
end

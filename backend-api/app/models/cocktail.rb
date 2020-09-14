class Cocktail < ApplicationRecord
    has_many :ingredients, through: :mixer
end

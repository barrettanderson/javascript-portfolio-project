class Cocktail < ApplicationRecord
    has_many :mixers
    has_many :ingredients, through: :mixers
    validates :name, presence: true
end

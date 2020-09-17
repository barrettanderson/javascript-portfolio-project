class Ingredient < ApplicationRecord
    has_many :mixers
    has_many :cocktails, through: :mixers
end

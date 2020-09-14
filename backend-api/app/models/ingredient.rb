class Ingredient < ApplicationRecord
    has_many :cocktails, through: :mixer
end

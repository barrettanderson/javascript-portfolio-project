class CreateCocktails < ActiveRecord::Migration[6.0]
  def change
    create_table :cocktails do |t|
      t.string :title
      t.text :ingredients

      t.timestamps
    end
  end
end

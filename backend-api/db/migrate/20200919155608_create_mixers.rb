class CreateMixers < ActiveRecord::Migration[6.0]
  def change
    create_table :mixers do |t|
      t.integer :cocktail_id
      t.integer :ingredient_id
      t.timestamps
    end
  end
end

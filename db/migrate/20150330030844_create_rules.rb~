class CreateRules < ActiveRecord::Migration
  def change
    create_table :rules do |t|
      t.float :target_price
      t.integer :portfolio_id
      t.integer :stock_id

      t.timestamps null: false
    end
  end
end

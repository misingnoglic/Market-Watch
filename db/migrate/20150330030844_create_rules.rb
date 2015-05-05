class CreateRules < ActiveRecord::Migration
  def change
    create_table :rules do |t|
      t.float :target_price 
      t.integer :user_id
      t.integer :stock_id
      t.integer :last_fired

      t.timestamps null: false
    end
  end
end

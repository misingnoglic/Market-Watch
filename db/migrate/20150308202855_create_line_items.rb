class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.integer :stock_id
      t.integer :portfolio_id

      t.timestamps null: false
    end
  end
end

class CreateLastPriceRules < ActiveRecord::Migration
  def change
    create_table :last_price_rules do |t|

      t.timestamps null: false
    end
  end
end

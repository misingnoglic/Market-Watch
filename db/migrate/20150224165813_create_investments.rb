class CreateInvestments < ActiveRecord::Migration
  def change
    create_table :investments do |t|
      t.decimal : price
      t.int :time

      t.timestamps null: false
    end
  end
end

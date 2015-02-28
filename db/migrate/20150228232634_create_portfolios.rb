class CreatePortfolios < ActiveRecord::Migration
  def change
    create_table :portfolios do |t|
      t.int :number_shares

      t.timestamps null: false
    end
  end
end

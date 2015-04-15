class CreatePortfolios < ActiveRecord::Migration
  def change
    create_table :portfolios do |t|

      t.timestamps null: false
    end
  end
end

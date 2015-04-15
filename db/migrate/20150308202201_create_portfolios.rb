class CreatePortfolios < ActiveRecord::Migration
  def change
    create_table :portfolios do |t|

      t.timestamps null: false
      t.integer :user_id

    end
    add_index :portfolios, :user_id

  end
end

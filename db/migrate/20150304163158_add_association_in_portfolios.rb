class AddAssociationInPortfolios < ActiveRecord::Migration
  def change
  	drop_table :portfolios

  	create_table :portfolios do |t|
      	  t.belongs_to :user, index: true
     	  t.belongs_to :stock, index: true
          t.integer :number_shares
      
      t.timestamps null: false
    end

  end
end

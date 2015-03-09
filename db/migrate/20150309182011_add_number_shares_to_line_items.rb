class AddNumberSharesToLineItems < ActiveRecord::Migration
  def change
  	remove_column :line_items, :number_shares
    add_column :line_items, :number_shares, :integer, default: 1
  end
end

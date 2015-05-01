class AddComparatorFieldToRules < ActiveRecord::Migration
  def change
  	add_column :rules, :compare, :integer, default: 0 
  end
end

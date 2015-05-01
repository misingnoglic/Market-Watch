class AddComparatorFieldToRules < ActiveRecord::Migration
  def change
  	add_column :rules, :comparae, :integer, default: 0 
  end
end

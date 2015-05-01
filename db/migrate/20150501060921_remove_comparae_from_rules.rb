class RemoveComparaeFromRules < ActiveRecord::Migration
  def change
  	remove_column :rules, :comparae
  end
end

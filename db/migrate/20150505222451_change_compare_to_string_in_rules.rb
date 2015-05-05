class ChangeCompareToStringInRules < ActiveRecord::Migration
  def change
  	remove_column :rules, :compare
  	add_column :rules, :compare_type, :string
  end
end

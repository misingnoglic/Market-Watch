class AddTypeToRule < ActiveRecord::Migration
  def change
  	add_column :rules, :type, :string
  end
end

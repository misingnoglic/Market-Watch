class CreateStrocs < ActiveRecord::Migration
  def change
    create_table :strocs do |t|
      t.string : name
      t.string :symbol

      t.timestamps null: false
    end
  end
end

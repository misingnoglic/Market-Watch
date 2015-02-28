class CreateWatchlists < ActiveRecord::Migration
  def change
    create_table :watchlists do |t|

      t.timestamps null: false
    end
  end
end

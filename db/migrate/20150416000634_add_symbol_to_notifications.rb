class AddSymbolToNotifications < ActiveRecord::Migration
  def change
    add_column :notifications, :symbol, :text
  end
end

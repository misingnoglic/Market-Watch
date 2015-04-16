class AddCheckedToNotifications < ActiveRecord::Migration
  def change
    add_column :notifications, :seen, :boolean
  end
end

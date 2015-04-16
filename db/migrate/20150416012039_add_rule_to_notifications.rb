class AddRuleToNotifications < ActiveRecord::Migration
  def change
    add_reference :notifications, :rule, index: true
    add_foreign_key :notifications, :rules
  end
end

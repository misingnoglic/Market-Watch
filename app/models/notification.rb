class Notification < ActiveRecord::Base

belongs_to :rule
belongs_to :user

after_create :notify
  def notify
    rule = self.rule
    passed_in = rule.getNotification.map do |key, value|
      "#{"  + value.to_s + "}"
    end
    Pusher['private-'+self.rule.user.id.to_s].trigger('client-new_message', passed_in)
  end
end

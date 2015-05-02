class Notification < ActiveRecord::Base

belongs_to :rule
belongs_to :user

after_create :notify
  def notify
    rule = self.rule
    Rails.logger.debug ("foo7000- #{rule.getNotification}")
    passed_in = rule.getNotification
    Rails.logger.debug ("foo2000- #{passed_in.to_s}")
    Pusher['private-'+self.rule.user.id.to_s].trigger('client-new_message', passed_in)
    puts("The rule has fired!")
    #This is where I will put the other notifications
  end
end

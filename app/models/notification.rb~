class Notification < ActiveRecord::Base

belongs_to :rule
belongs_to :user
require "slack-notify"
after_create :notify
  def notify
    Rails.logger.debug ("Notify called")
    rule = self.rule
    Rails.logger.debug ("foo7000- #{rule.getNotification}")
    passed_in = rule.getNotification
    Rails.logger.debug ("foo2000- #{passed_in.to_s}")
    Pusher['private-'+self.rule.user.id.to_s].trigger('client-new_message', passed_in)
    Rails.logger.debug ("The client message was sent")
    client = SlackNotify::Client.new(webhook_url: "https://hooks.slack.com/services/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")
    s = "#{rule.getNotification[:stock_symbol]}  #{rule.message}  #{rule.target}"
    client.notify(s)
    Rails.logger.debug ("Slack should have been sent")
    #This is where I will put the other notifications

  end
end

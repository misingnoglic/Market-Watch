class EmailJob
  include SuckerPunch::Job

  def perform(rule)
    RuleMailer.sample_email(rule).deliver
  end
end
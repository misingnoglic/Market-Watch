# Preview all emails at http://localhost:3000/rails/mailers/newuser_mailer
class NewuserMailerPreview < ActionMailer::Preview
	def sample_mail_preview
    	NewuserMailer.sample_email(User.first)
  	end
end

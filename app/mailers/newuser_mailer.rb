class NewuserMailer < ApplicationMailer
	default from: "marketwatch166b@gmail.com"
	def sample_email(user)
    	@user = user
    	mail(to: @user.email, subject: 'New user confirmation')
  	end
end

class SessionsController < ApplicationController
	skip_before_filter :authorize
def new
end

def create
	user = User.find_by_user_name(params[:user_name])
if user and user.authenticate(params[:password])
    session[:user_id] = user.id
    if user.admin 
    	redirect_to admin_url
	else
		redirect_to current_portfolio
	end
else
	redirect_to login_url, alert: "Invalid user/password combination"
	end
end

def destroy
session[:user_id] = nil
redirect_to login_url, notice: "Logged out"
end
end

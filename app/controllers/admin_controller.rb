class AdminController < ApplicationController 
	def index
    @total_users = User.count
end 
end
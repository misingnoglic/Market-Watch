class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :authorize
  protected
  def authorize
    unless User.find_by_id(session[:user_id])
      redirect_to login_url, notice: "Please log in" end
  end


	private
	def current_portfolio 
		Portfolio.find(session[:portfolio_id])
	rescue ActiveRecord::RecordNotFound 
		portfolio = Portfolio.create 
		session[:portfolio_id] = portfolio.id
		portfolio
	end

 

end

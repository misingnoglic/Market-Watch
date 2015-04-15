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


<<<<<<< HEAD
    private
    def current_portfolio 
        Portfolio.find_by_user_id(session[:user_id])
    rescue ActiveRecord::RecordNotFound 
        portfolio = Portfolio.create 
        session[:portfolio_id] = portfolio.id
        portfolio
               
    end

        def current_user?
         return session[:user_id]
        end
def stock_params (params)
      params.require(:stock).permit(:stock_name, :stock_symbol, :last_trade_price, :percent_change)
end

helper_method :current_portfolio
helper_method :current_user?

end
=======
  private
  def current_portfolio
    Portfolio.find_by_user_id(session[:user_id])
  rescue ActiveRecord::RecordNotFound
    portfolio = Portfolio.create
    session[:portfolio_id] = portfolio.id
    portfolio

  end

  def current_user?
    return session[:user_id]
  end
  def stock_params (params)
    params.require(:stock).permit(:stock_name, :stock_symbol, :last_trade_price, :percent_change)
  end

  helper_method :current_portfolio
  helper_method :current_user?

end
>>>>>>> 03d1af387bdad9ba4ae7323d2bd22b03aeae0c30

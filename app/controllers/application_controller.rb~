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
    Portfolio.find_by_user_id(session[:user_id])
  rescue ActiveRecord::RecordNotFound
    portfolio = Portfolio.create
    session[:portfolio_id] = portfolio.id
    portfolio

  end

  def current_user
    user = nil
    if user = User.find_by_id(session[:user_id])
      return user
    end
 end

 def get_image_by_symbol(stock_symbol)
   stock = Stock.find_by_stock_symbol(stock_symbol)
   stock.get_image_by_symbol
 end
 
 def get_API_history_json (stock_symbol, days_ago)
   Chart.get_API_history_json (stock_symbol, days_ago)
 end

 def self.create_chart (old_chart, rule, label)
          rule = Rule.find(rule)
          target= rule.target
   return Chart.add_target_to_json(old_chart,target, label)
 end 


  def stock_params (params)
    params.require(:stock).permit(:stock_name, :stock_symbol, :last_trade_price, :percent_change)
  end

  helper_method :current_portfolio
  helper_method :current_user
  helper_method :get_image_by_symbol
  helper_method :get_API_history_json
  helper_method :create_chart


end


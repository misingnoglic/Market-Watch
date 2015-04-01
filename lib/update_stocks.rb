require 'yahoofinance'

class UpdateStocks

  def self.update 
  	stocks = Stock.all
  	stocks.each do |stock|
  		Stock.update(stock.id, :last_trade_price => stock.price, :percent_change => stock.percent)
  	end
  end


end
require 'yahoofinance'

class UpdateStocks

  	def self.update 
  		stocks = Stock.all
  		stocks.each do |stock|
  			price = stock.price
  			if price != stock.last_trade_price
  				Stock.update(stock.id, :last_trade_price => price)
  				StockHistory.create(:stock_symbol => stock.stock_symbol, :last_trade_price => price, :sentiment_score => stock.sentiment_score)
  			end
  		end
  	end


end

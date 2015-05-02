require 'yahoofinance'

class UpdateStocks

  	def self.update 
  		stocks = Stock.all
  		stocks.each do |stock|
  			price = stock.price
  			Stock.update(stock.id, :last_trade_price => price, :sentiment_score => stock.getSentimentScore)
  			StockHistory.create(:stock_symbol => stock.stock_symbol, :last_trade_price => price)
  		end
  	end


end

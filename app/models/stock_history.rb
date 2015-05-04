class StockHistory < ActiveRecord::Base
  require 'json'
  scope :by_stock_symbol, -> stock_symbol { where(stock_symbol: stock_symbol)}

=begin
  def self.createHighchartsJSON(symbol)
    stock_histories = StockHistory.where(stock_symbol: symbol)
    histories = []
    for stock_history in stock_histories do
      histories.append([stock_history.created_at.utc.to_i, stock_history.last_trade_price])
    end
    return JSON.generate(histories)
  end

  def self.createGoogleJSON(symbol)
    stock_histories = StockHistory.where(stock_symbol: symbol)
    histories = [["Date","Price"]]
    for stock_history in stock_histories do
      histories.append([stock_history.created_at.strftime("%m-%d %H:%M"), stock_history.last_trade_price])
    end
    return JSON.generate(histories)
  end
=end


end

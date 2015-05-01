class StockHistory < ActiveRecord::Base
  require 'json'

  def createHighchartsJSON(symbol)
    stock_histories = StockHistory.where(stock_symbol: symbol)
    histories = []
    for stock_history in stock_histories do
      histories.append([stock_history.created_at.utc.to_i, stock_history.last_trade_price])
    end
    return JSON.generate(histories)
  end

end

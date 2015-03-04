require 'yahoofinance'
class Stock < ActiveRecord::Base

    has_many :portfolios
    has_many :watchlist
    has_many :users, through: :portfolios
    has_many :users, through: :watchlist

    #attr_accessor :stock_symbol
  def price
      YahooFinance::get_quotes( YahooFinance::StandardQuote, self.stock_symbol )[self.stock_symbol.upcase].lastTrade
  end

  def historical_price(days_ago)
    (YahooFinance::get_historical_quotes_days( self.stock_symbol, days_ago ).last.last.to_f)
  end
end



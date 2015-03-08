require 'yahoofinance'
class Stock < ActiveRecord::Base

  has_many :line_items
  before_destroy :ensure_not_referenced_by_any_line_item

    #attr_accessor :stock_symbol
  def price
      YahooFinance::get_quotes( YahooFinance::StandardQuote, self.stock_symbol )[self.stock_symbol.upcase].lastTrade
  end

  def historical_price(days_ago)
    (YahooFinance::get_historical_quotes_days( self.stock_symbol, days_ago ).last.last.to_f)
  end

  def open
    YahooFinance::get_quotes( YahooFinance::StandardQuote, self.stock_symbol )[self.stock_symbol.upcase].open
  end


  private
  # ensure that there are no line items referencing this product
  def ensure_not_referenced_by_any_line_item 
    if line_items.empty?
      return true 
    else
      errors.add(:base, 'Line Items present')
      return false 
    end
  end

end



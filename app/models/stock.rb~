require 'yahoofinance'
require 'json'
require 'open-uri'
require 'slack-notify'

class Stock < ActiveRecord::Base
  validates :stock_symbol, presence: true, if: :stock_exists?
  has_many :line_items
  has_many :rules
  has_many :tweets
  has_many :feed_entries

  scope :by_stock_symbol, -> stock_symbol { where(stock_symbol: stock_symbol)}


  before_destroy :ensure_not_referenced_by_any_line_item

    #attr_accessor :stock_symbol

  def getSentimentScore
     tweets = Tweet.where(:stock => self)
     score = 0
     count = 0
     tweets.each do |tweet|
       score = score + tweet.sentiment_score
       count  = count + 1
     end
     if count == 0
      return nil
    else
     return (score/count).round(4)
   end
  end

  def price
    prices = YahooFinance::get_quotes( YahooFinance::StandardQuote, self.stock_symbol.upcase )
    puts prices
    prices[self.stock_symbol.upcase].lastTrade
  end

def get_image_by_symbol
   begin
     name = YahooFinance::get_quotes( YahooFinance::StandardQuote, self.stock_symbol.upcase )[self.stock_symbol.upcase].name.gsub(" ","+")
     content = open("http://api.duckduckgo.com/?q=#{name}&format=json").read
     json = JSON.parse(content)
     image = json['Image']
     if image.length < 5
       content = open("http://api.duckduckgo.com/?q=#{self.stock_symbol.upcase}&format=json").read
       json = JSON.parse(content)
       image = json['Image']
     end
     return image
   rescue
     return ""
   end
   
 end

  def historical_price(days_ago)
    (YahooFinance::get_historical_quotes_days( self.stock_symbol, days_ago ).last.last.to_f)
  end

  def open_price
    YahooFinance::get_quotes( YahooFinance::StandardQuote, self.stock_symbol.upcase )[self.stock_symbol.upcase].open
  end

  def chart_prices(days_ago)

    prices = (YahooFinance::get_historical_quotes_days( self.stock_symbol, days_ago ))
    returned_list = []
    prices.each do |price_list|
      returned_list.push([price_list.first,price_list.last.to_f])
    end
    returned_list = returned_list.reverse
    return [['Date','Price']]+returned_list
    #return returned_list
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

  def stock_exists?
    return YahooFinance::get_quotes( YahooFinance::StandardQuote, self.stock_symbol)[self.stock_symbol].name != "N/A"
  end

end



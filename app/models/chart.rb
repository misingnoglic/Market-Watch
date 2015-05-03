require 'yahoofinance'
require 'json'
require 'open-uri'

class Chart < ActiveRecord::Base

  belongs_to :rule

  def self.get_price_history_json (stock_symbol)
    price_histories = Stock.by_stock_symbol(stock_symbol)
    
    time_v_price = [["Date","Price"]]
    price_histories.each do |price_history|
      time_v_price.append([price_history.created_at.strftime("%m-%d %H:%M"), price_history.last_trade_price])
    end
    return JSON.generate(time_v_price)
  end

  def self.get_sentiment_history_json (stock_symbol)
    sentiment_histories = Stock.by_stock_symbol(stock_symbol)
    
    time_v_sentiment = [["Date","Sentiment"]]
    sentiment_histories.each do |sentiment_history|
      time_v_sentiment.append([sentiment_history.created_at.strftime("%m-%d %H:%M"), sentiment_history.getSentimentScore])
    end
    return JSON.generate(time_v_sentiment)
  end

  
  def self.add_target_to_json(old_chart, target)
    old_chart = JSON.parse(old_chart)
    old_chart[0]+=["Target"]
    (old_chart.length - 1).times do |index|
      old_chart[index+1]+=[target]
    end
  end
  return JSON.generate(old_chart)
end

  

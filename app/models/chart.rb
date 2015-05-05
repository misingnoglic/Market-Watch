require 'yahoofinance'
require 'json'
require 'open-uri'
require 'slack-notify'

class Chart < ActiveRecord::Base

  

  #gets native price_history and combines with api stock_history
  def self.get_price_history_json (stock_symbol)
    api_histories = JSON.parse(get_API_history_json(stock_symbol, 7))
    
    price_histories = StockHistory.by_stock_symbol(stock_symbol) 

    
    time_v_price = []
    price_histories.each do |price_history|
      time_v_price.append([price_history.created_at.strftime("%m-%d %H:%M"), price_history.last_trade_price])
    end
    
    time_v_price = (api_histories + time_v_price)
    return JSON.generate(time_v_price)
  end


 # gets raw api data for price_history
  def self.get_API_history_json (stock_symbol, days_ago)


    prices = (YahooFinance::get_historical_quotes_days( stock_symbol, days_ago ))
    returned_list = []
    prices.each do |price_list|
      returned_list.push([price_list.first,price_list.last.to_f])
    end
    returned_list = returned_list.reverse
    return JSON.generate([['Date','Price']]+returned_list)
  end

#gets native sentiment history
  def self.get_sentiment_history_json (stock_symbol)
    sentiment_histories = Stock.by_stock_symbol(stock_symbol)
    
    time_v_sentiment = [["Date","Sentiment"]]
    sentiment_histories.each do |sentiment_history|
      time_v_sentiment.append([sentiment_history.created_at.strftime("%m-%d %H:%M"), sentiment_history.getSentimentScore])
    end
    return JSON.generate(time_v_sentiment)
  end

#takes chart and combines it with target
  def self.add_target_to_json(old_chart, target_price, target_label)
    old_chart = JSON.parse(old_chart)
    old_chart[0]+=[target_label]
    (old_chart.length - 1).times do |index|
      old_chart[index+1]+=[target_price]
    end
    return JSON.generate(old_chart)
  end

=begin
  def self.create_target_price_chart (stock_symbol, user_id, )
    id = Stock.where(stock_symbol: stock_symbol)[0].id
    rules = Rule.where(stock_id: id, user_id: user_id, rule_type: "target_price")
    old_chart = get_API_history_json(stock_symbol, 7)
    for rule in rules.each do
      old_chart = self.add_target_to_json(old_chart,rule.target_price, "target price")
    end
    return old_chart
  end
=end

  def self.create_pie_chart_json (portfolio_id)
    portfolio = Portfolio.find(portfolio_id)
    acc = [["Stock Name","Value"]]
    portfolio.line_items.each do |item|
      stock = Stock.find(item.stock_id)
      Rails.logger.debug "ZOOFOO - #{stock.stock_symbol} === #{stock.last_trade_price} ---- #{item.number_shares}"
      acc.append([stock.stock_symbol, stock.last_trade_price*item.number_shares])
    end
    return JSON.generate(acc)
  end

end

 #test ----

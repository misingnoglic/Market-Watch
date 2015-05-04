require 'feedjira'

class FeedEntry < ActiveRecord::Base

	belongs_to :stock

	def self.get_feed
		stocks = Stock.all
		stocks.each do |stock|
			stock_symbol = stock.stock_symbol
			feed_url = "http://finance.yahoo.com/rss/headline?s=#{stock_symbol}"
			feed = Feedjira::Feed.fetch_and_parse(feed_url)
    		add_entries(feed.entries, stock.id)
  		end
  	end
  
  	def self.update_from_feed
  		stocks = Stock.all
		stocks.each do |stock|
			stock_symbol = stock.stock_symbol
			feed_url = "http://finance.yahoo.com/rss/headline?s=#{stock_symbol}"
			feed = Feedjira::Feed.fetch_and_parse(feed_url)
      		feed = Feedzirra::Feed.update(feed)
      		if feed.updated?
      			add_entries(feed.new_entries,stock.id) 
      		end
      	end
  	end
  
  	private
  
  	def self.add_entries(entries, stock_id)
    	entries.each do |entry|
      		unless exists? :guid => entry.entry_id
        		create!(
          			:title         => entry.title,
          			:description   => entry.summary,
          			:link          => entry.url,
          			:published_at  => entry.published,
          			:guid          => entry.entry_id,
          			:stock_id 	   => stock_id
        		)
      		end
    	end
  	end

    def self.search(search)
      if search
        stock = Stock.find_by_stock_symbol(search)
        if stock != nil
          where(:stock_id => stock.id)
        end
      else
        all
      end
    end

end

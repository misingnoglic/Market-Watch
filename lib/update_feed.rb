require 'feedjira'

class UpdateFeed

	def self.update
		FeedEntry.destroy_all
    	@stocks = Stock.all
    	@stocks.each do |stock| 
    		stock_symbol = stock.stock_symbol
      		feed_url = "http://finance.yahoo.com/rss/headline?s=#{stock_symbol}"
      		feed = Feedjira::Feed.fetch_and_parse(feed_url)
        	add_entries(feed.entries, stock.id)
      		
    	end
	end


  	def self.add_entries(entries, stock_id)
    	entries.each do |entry|
      		#unless exists? :guid => entry.entry_id
        		FeedEntry.create(
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
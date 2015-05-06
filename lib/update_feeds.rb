require 'rss'
require 'open-uri'


class UpdateFeeds

  def self.update 
    
    FeedEntry.destroy_all
    @stocks = Stock.all
    @stocks.each do |stock| 
      url = 'http://finance.yahoo.com/rss/headline?s='+ stock.stock_symbol
      open(url) do |rss|
        feed = RSS::Parser.parse(rss)
        feed.items.each do |entry|
          FeedEntry.create(
                :title         => entry.title,
                :description   => entry.description,
                :link          => entry.link,
                :published_at  => entry.pubDate,
                :guid          => entry.guid,
                :stock_id      => stock.id
          )
        end
      end
    end

	end


end


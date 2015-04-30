require 'twitter'
require 'sentimental'

class UpdateTweets

  def self.update 
  	@client = Twitter::REST::Client.new do |config|
      	config.consumer_key        = "UwWwQ9SG3zL9kpi7PsTRMRNLI"
      	config.consumer_secret     = "0FWAqiWafcDcE9uY8lfNW7JLJRsf7aLgHUedUruLP8Dmhy45FR"
   		 config.access_token        = "2373166561-KZgDVguX5bs0xOwknwGZQ64hnz0DYDbr44lwsI4"
   		 config.access_token_secret = "ugYnurDQcamkjfxp86aGdFoFUT0NbjpdcQ1KYZKUmIw6x"
    end
  
    Sentimental.load_defaults 

    Tweet.destroy_all
    @stocks = Stock.all
    @stocks.each do |stock| 
      @client.search("#{stock.stock_symbol} since:#{Date.yesterday()}", result_type: "popular").take(3).collect do |tweet| 
			 analyzer = Sentimental.new
       Tweet.create(
			   	screen_name: tweet.user.screen_name,
				  content: tweet.text,
          sentiment: (analyzer.get_sentiment tweet.text),
          sentiment_score: (analyzer.get_score tweet.text),
				  stock_id: stock.id
			   )

			end
		end

  end


end
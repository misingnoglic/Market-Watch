class AddTweetedAtToTweet < ActiveRecord::Migration
  def change
  	add_column :tweets, :tweeted_at, :datetime
  end
end

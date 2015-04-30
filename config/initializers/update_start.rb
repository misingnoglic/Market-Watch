 require 'update_stocks_job'
 require 'update_tweets_job'

#update stocks, stock history and tweets
StockHistory.destroy_all
::UpdateJob.new.async.perform("asdf")
::UpdateTweetsJob.new.async.perform("asdf")


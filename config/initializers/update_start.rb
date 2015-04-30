 require 'update_stocks_job'
 require 'update_tweets_job'


::UpdateJob.new.async.perform("asdf")
::UpdateTweetsJob.new.async.perform("asdf")

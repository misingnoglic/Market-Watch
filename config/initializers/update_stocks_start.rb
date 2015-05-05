 require 'update_stocks_job'

require 'feedjira'
require 'update_rss_feed_job'

::UpdateJob.new.async.perform("asdf")



FeedEntry.get_feed
::UpdateFeedJob.new.async.perform("asdf")
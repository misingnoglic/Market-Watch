require 'feedjira'
require 'update_rss_feed_job'

FeedEntry.new.get_feed

::UpdateFeedJob.new.async.perform("asdf")


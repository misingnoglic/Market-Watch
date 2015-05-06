require 'feedjira'

class UpdateFeedJob

	include SuckerPunch::Job

	def perform(data)
		FeedEntry.update_from_feed
		UpdateFeedJob.new.async.later(60,"asdf") 
	end



	def later(sec,feed)
		after(sec) { perform(data) }
	end

	
end
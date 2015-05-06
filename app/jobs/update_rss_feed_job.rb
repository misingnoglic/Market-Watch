require 'update_feeds'

class UpdateFeedJob

	include SuckerPunch::Job

	def perform(data)
		::UpdateFeeds.update
		UpdateFeedJob.new.async.later(600,"asdf") 
	end



	def later(sec,data)
		after(sec) { perform(data) }
	end

	
end
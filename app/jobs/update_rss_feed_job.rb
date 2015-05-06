require 'feedjira'
require 'update_feed'

class UpdateFeedJob

	include SuckerPunch::Job

	def perform(data)
		::UpdateFeed.update
		UpdateFeedJob.new.async.later(1800,"asdf") 
	end



	def later(sec,data)
		after(sec) { perform(data) }
	end

	
end
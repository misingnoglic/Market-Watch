class UpdateTweetsJob
  include SuckerPunch::Job

  def perform(data)
		puts "#{Time.now}: Start updating tweets data" 
		::UpdateTweets.update
		UpdateTweetsJob.new.async.perform(10800,"asdf") 
	end

	def later(sec,data)
		after(sec) { perform(data) }
	end

end
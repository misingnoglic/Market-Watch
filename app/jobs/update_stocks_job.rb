require 'yahoofinance'

class UpdateJob
	include SuckerPunch::Job

	 require 'update_stocks'
	 require 'rule_engine'

	def perform(data)
		ActiveRecord::Base.connection_pool.with_connection do
			::RuleEngine.start
			#::UpdateStocks.update
			#need to add call to read from yahoo api and update stocks 
			UpdateJob.new.async.later(60,"asdf") 
		end
	end

	def later(sec,data)
		after(sec) { perform(data) }
	end
end



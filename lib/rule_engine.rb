require 'yahoofinance'
require 'update_stocks'

class RuleEngine

	def self.start
		::UpdateStocks.update
		rules = Rule.all
		rules.each do |rule|
			rule.checkTrigger()
		end

	end

end


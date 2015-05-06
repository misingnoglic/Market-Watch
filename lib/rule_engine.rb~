require 'yahoofinance'
require 'update_stocks'

class RuleEngine
        
        # notify if checkTrigger == true
	def self.start
		::UpdateStocks.update
		rules = Rule.all
		rules.each do |rule|
                        Rails.logger.debug "geth12 ---"
			rule.checkTrigger()
		end

	end

end


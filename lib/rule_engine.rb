require 'yahoofinance'
require 'update_stocks'

class RuleEngine
        
        # notify if checkTrigger == true
	def self.start
                begin
		::UpdateStocks.update
               
                 
                               Rails.logger.debug "work please1 ---"
		rules = Rule.all
		rules.each do |rule|
                        Rails.logger.debug "work please ---"
			rule.checkTrigger()
		end
                rescue 
                
                end
          
     end

end


require 'yahoofinance'
require 'update_stocks'

class RuleEngine

	def self.start
		::UpdateStocks.update
		rules = Rule.all
		rules.each do |rule|
			stock = rule.stock
			if rule.target_price <= stock.last_trade_price
				RuleMailer.sample_email(rule).deliver_now
			end
		end

	end

end
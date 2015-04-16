require 'yahoofinance'
require 'update_stocks'

class RuleEngine

	def self.start
		::UpdateStocks.update
		rules = Rule.all
		rules.each do |rule|
			stock = rule.stock
			if rule.target_price <= stock.last_trade_price
                                notification = rule.notifications.create(symbol: stock[:stock_symbol], content: stock[:stock_name])
			        Rails.logger.debug "xyz #{notification.attributes.inspect}"
                             Rails.logger.debug "zyx #{stock.attributes.inspect}"
				 Rails.logger.debug "hello-xyz #{stock[:symbol]}"
				#RuleMailer.sample_email(rule).deliver_now
			end
		end

	end

end

class LastPriceRule < Rule

	def checkTrigger
		stock = self.stock
		if self.target_price <= stock.last_trade_price
        	notification = self.notifications.create(symbol: stock[:stock_symbol], content: stock[:stock_name])
			#Rails.logger.debug "xyz #{notification.attributes.inspect}"
        	#Rails.logger.debug "zyx #{stock.attributes.inspect}"
			#Rails.logger.debug "hello-xyz #{stock[:symbol]}"
			RuleMailer.sample_email(self).deliver_now
		end
	end

end

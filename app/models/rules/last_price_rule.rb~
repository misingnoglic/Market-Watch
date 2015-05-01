class LastPriceRule < Rule

	def checkTrigger
          if target <= stock.last_trade_price  #should the comparator be a seperate function to prevent seperate class for each for >, >= <= etc ??? 
            notification = self.notifications.create if canfire?
            self.lastfire = Time.now.utc
          end
	end
     
        def target
          return self.target_price
        end

end

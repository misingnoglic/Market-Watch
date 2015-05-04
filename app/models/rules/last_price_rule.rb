class LastPriceRule < Rule

	def checkTrigger
          if target <= stock.last_trade_price  #should the comparator be a seperate function to prevent seperate class for each for >, >= <= etc ??? 
            if canfire? 
            myobj = Rule.find(self.id)
            myobj[:last_fired] = Time.now.to_i
            myobj.save!
            Rails.logger.debug "goo #{myobj.attributes.inspect}"
             notification = self.notifications.create
            end
          end
	end
     
        def target
          return self.target_price
        end
   
        def create_chart 
          target= self.target
          stock_symbol = self.stock.stock_symbol
          return Chart.add_target_to_json(Chart.get_price_history_json(stock_symbol),target, "Target Price")
        end 

end

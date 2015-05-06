class LastPriceRule < Rule

	def checkTrigger
          
            Rails.logger.debug "if reach7"

            if target <= stock.last_trade_price  #should the comparator be a seperate function to prevent seperate class for each for >, >= <= etc ??? 
              if canfire? 
                        Rails.logger.debug "if reach2"
              myobj = Rule.find(self.id)
              myobj[:last_fired] = Time.now.to_i
              myobj.save!
              Rails.logger.debug "goo #{myobj.attributes.inspect}"
              notification = self.notifications.create

              end
            end
       
            if target >= stock.last_trade_price  #should the comparator be a seperate function to prevent seperate class for each for >, >= <= etc ??? 
              if canfire? 
                       Rails.logger.debug "if reach1"
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
        

   

        def message
            if target <= stock.last_trade_price
              return " last trade price has exceeded the target price of "
           else
            return " last trade price has dropped below the target price of "
           end
        end
end

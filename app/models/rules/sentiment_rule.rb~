class SentimentRule < Rule



	def checkTrigger
        if self.compare_type = "greater"
            if target <= stock.sentiment_score  #should the comparator be a seperate function to prevent seperate class for each for >, >= <= etc ??? 
                if canfire? 
                myobj = Rule.find(self.id)
                myobj[:last_fired] = Time.now.to_i
                myobj.save!
                Rails.logger.debug "goo #{myobj.attributes.inspect}"
                notification = self.notifications.create
                #RuleMailer.sample_email(self).deliver_now
                end
            end
        else
            if target >= stock.sentiment_score  #should the comparator be a seperate function to prevent seperate class for each for >, >= <= etc ??? 
                if canfire? 
                myobj = Rule.find(self.id)
                myobj[:last_fired] = Time.now.to_i
                myobj.save!
                Rails.logger.debug "goo #{myobj.attributes.inspect}"
                notification = self.notifications.create
                #RuleMailer.sample_email(self).deliver_now
                end
            end 
        end
	end
     
    def target
        return self.target_price
    end



    def message
        if target <= stock.sentiment_score
            return " last sentiment score has exceeded the target score of "
        else
            return " last sentiment score has dropped below the target score of "
        end
    end

end
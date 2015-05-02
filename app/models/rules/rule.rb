class Rule < ActiveRecord::Base
	belongs_to :stock
	belongs_to :user
    has_many :notifications
	accepts_nested_attributes_for :stock


	validates :user, presence: true, length: { minimum: 1 }
	/validates :target_price , presence: true, numericality: true/

	attr_accessor :stock_symbol

        # called to see if main condition is met, must be overridden
        def checkTrigger
	      end
      
        def getNotification
          notifications = Hash.new
          notifications = {stock_symbol: stock[:stock_symbol], stock_price: stock.price.to_s,  message: message, target: target.to_s, image_url: stock.get_image_by_symbol.to_s}
          return notifications 
        end

        def canfire?
          if (self.last_fired.to_i- Time.now.to_i).abs >= self.user.settings(:frequency).time
            Rails.logger.debug "jootrue #{(self.last_fired.to_i- Time.now.to_i)}"
                        Rails.logger.debug "jooxyz #{self.last_fired.to_i}"
            return true
          end
                     Rails.logger.debug "joofalse #{(self.last_fired.to_i - Time.now.to_i).to_i.abs}"
          return false
        end
      
        #target predicate, override
        def target
        
        end
      
        def set_time
          self.lastfired = Time.now.to_i
        end
    
        def get_time
          self.lastfired
        end

        
     
        # returns string that can be used for notification, override when necessary
        def message
           return " has reached the price of "
        end
       
        
        
        
	
	
end

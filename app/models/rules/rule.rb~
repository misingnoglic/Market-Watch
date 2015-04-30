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
          notifications = {stock_symbol: stock[:stock_symbol], stock_price: stock.price.to_s,  message: message, target: target.to_s, image: stock.get_image_by_symbol.to_s}
          return notifications 
        end

       
      
        #target predicate, override
        def target
        
        end
     
        # returns string that can be used for notification, override when necessary
        def message
           return " has reached the price of "
        end
       
        
        
        
	
	
end

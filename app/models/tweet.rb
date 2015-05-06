class Tweet < ActiveRecord::Base
	belongs_to :stock

	def self.search(search)
  		if search
  			stock = Stock.find_by_stock_symbol(search)
  			if stock != nil
  				where(:stock_id => stock.id).order('tweeted_at DESC')
  			end
  		else
    		all.order('tweeted_at DESC')
  		end
	end

end

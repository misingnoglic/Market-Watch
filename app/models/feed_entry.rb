
class FeedEntry < ActiveRecord::Base

	belongs_to :stock

    def self.search(search)
      if search
        stock = Stock.find_by_stock_symbol(search)
        if stock != nil
          where(:stock_id => stock.id)
        end
      else
        all
      end
    end

end

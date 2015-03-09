class Portfolio < ActiveRecord::Base
	belongs_to :user
	has_many :line_items, dependent: :destroy

	def add_product(stock_id)
		current_item = line_items.find_by_stock_id(stock_id) 
		if current_item
      	current_item.number_shares += 1
		else
      	current_item = line_items.build(stock_id: stock_id)
		end
    	current_item
	end
end

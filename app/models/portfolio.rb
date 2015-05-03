class Portfolio < ActiveRecord::Base
	belongs_to :user
	has_many :line_items, dependent: :destroy
	has_many :rules, dependent: :destroy

	def add_product(stock_id, number_shares)
		number_shares = number_shares.to_i
		current_item = line_items.find_by_stock_id(stock_id) 
		if current_item
      	current_item.number_shares = current_item.number_shares + number_shares
      	current_item.save
		else
      	current_item = line_items.build(stock_id: stock_id, number_shares: number_shares)
		end
    	current_item
	end

	def add_rule(stock_id, target_price)
		current_item = rules.build(stock_id: stock_id, target_price: target_price)
	end

	def pie_chart_JSON

		returned_list = []
		prices.each do |price_list|
			returned_list.push([price_list.first,price_list.last.to_f])
		end
		returned_list = returned_list.reverse
		return [['Date','Price']]+returned_list
	end

end

class LineItem < ActiveRecord::Base
    belongs_to :stock
    belongs_to :portfolio
        validate :check_unique #Warning- Validation will still pass in cases when stock_ids are equal and symbols are equal
    scope :ordered_by_stock_name, -> { joins(:stock).order('stocks.stock_name') }

    def check_unique
         curr_portfolio = Portfolio.find(portfolio_id)
         curr_stock = Stock.find (stock_id)
         curr_portfolio.line_items.each do |line_item| 
           if ((line_item.stock.stock_symbol == curr_stock[:stock_symbol]) && (line_item.stock_id != self.stock.id)) then
             errors.add(:stock_id, "please edit existing investment")
           end
         end
     end
                 

       
end
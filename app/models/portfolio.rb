class Portfolio < ActiveRecord::Base
	validates :number_shares, presence: true, numericality: { :greater_than_or_equal_to => 1 }, message: "Number of shares must be entered"
    
    belongs_to :user
    belongs_to :stock
end

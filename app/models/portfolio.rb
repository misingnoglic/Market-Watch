class Portfolio < ActiveRecord::Base
	has_many :line_items, dependent: :destroy
end

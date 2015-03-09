class Portfolio < ActiveRecord::Base
	belongs_to :user
	has_many :line_items, dependent: :destroy
end

class Rule < ActiveRecord::Base
	belongs_to :stock
	belongs_to :portfolio


	validates :portfolio, presence: true, length: { minimum: 1 }
	validates :target, presence: true, numericality: true

	attr_accessor :stock_symbol
end

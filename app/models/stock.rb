class Stock < ActiveRecord::Base
    has_many :portfolios
    has_many :watchlist
    has_many :users, through: :portfolios
end

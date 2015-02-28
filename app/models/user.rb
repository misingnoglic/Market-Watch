class User < ActiveRecord::Base
    has_many :portfolios
    has_many :watchlists
    has_many :stocks, through: :portfolios
    has_many :stocks, through: :watchlists
end

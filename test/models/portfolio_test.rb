require 'test_helper'

class PortfolioTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "number of shares must be positive" do
		portfolio = Portfolio.new
		
		portfolio.number_shares = -1
		assert portfolio.invalid?
		assert_equal "must be greater than or equal to 1",
		portfolio.errors[:number_shares].join('; ')

		portfolio.number_shares = 0
		assert portfolio.invalid?
		assert_equal "must be greater than or equal to 1",
		portfolio.errors[:number_shares].join('; ')

  		portfolio.number_shares = 1
  		assert portfolio.valid?
end

end

require 'test_helper'

class StockTest < ActiveSupport::TestCase
 
  test 'is created' do
     
  assert_equal 'GOOG', stocks(:Google).stock_symbol
  end

  test 'stock created with a valid stock symbol' do
     
  assert_equal 'AAPL', stocks(:one).stock_symbol
  end
end

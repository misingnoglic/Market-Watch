require 'test_helper'

class StockTest < ActiveSupport::TestCase
 
  test 'is created' do
     
  assert_equal 'GOOG', stocks(:Google).stock_symbol
  end
end

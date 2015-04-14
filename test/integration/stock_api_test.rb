require 'test_helper'
require 'yahoofinance'

class StockAPITest < ActionController::TestCase
  setup do
    @stock =  YahooFinance::get_quotes( YahooFinance::StandardQuote, "AAPL" )
  end

  test "should return something" do
    assert @stock.class  == Hash
  end

  test "should have the stock in the hash" do
    assert @stock["AAPL"].class == YahooFinance::StandardQuote
  end

  test "should have a price" do
    assert @stock["AAPL"].lastTrade.class == Float
    assert @stock["AAPL"].lastTrade.class > 0
  end
end

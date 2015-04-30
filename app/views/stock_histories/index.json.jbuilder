json.array!(@stock_histories) do |stock_history|
  json.extract! stock_history, :id, :stock_symbol, :last_trade_price
  json.url stock_history_url(stock_history, format: :json)
end

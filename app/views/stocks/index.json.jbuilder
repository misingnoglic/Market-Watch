json.array!(@stocks) do |stock|
  json.extract! stock, :id, : stock_name, :stock_symbol
  json.url stock_url(stock, format: :json)
end

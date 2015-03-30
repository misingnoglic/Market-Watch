json.array!(@rules) do |rule|
  json.extract! rule, :id, :target_price, :portfolio_id, :stock_id
  json.url rule_url(rule, format: :json)
end

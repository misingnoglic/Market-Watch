json.array!(@investments) do |investment|
  json.extract! investment, :id, : price, :time
  json.url investment_url(investment, format: :json)
end

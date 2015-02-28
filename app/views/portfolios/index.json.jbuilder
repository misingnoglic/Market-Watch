json.array!(@portfolios) do |portfolio|
  json.extract! portfolio, :id, :number_shares
  json.url portfolio_url(portfolio, format: :json)
end

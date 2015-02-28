json.array!(@watchlists) do |watchlist|
  json.extract! watchlist, :id
  json.url watchlist_url(watchlist, format: :json)
end

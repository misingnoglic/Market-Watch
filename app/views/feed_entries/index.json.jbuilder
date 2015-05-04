json.array!(@feed_entries) do |feed_entry|
  json.extract! feed_entry, :id, :title, :description, :link, :published_at, :guid, :stock_id
  json.url feed_entry_url(feed_entry, format: :json)
end

json.array!(@strocs) do |stroc|
  json.extract! stroc, :id, : name, :symbol
  json.url stroc_url(stroc, format: :json)
end

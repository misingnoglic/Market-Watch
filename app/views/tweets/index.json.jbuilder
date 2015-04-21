json.array!(@tweets) do |tweet|
  json.extract! tweet, :id, :screen_name, :content, :sentiment, :sentiment_score, :stock_id
  json.url tweet_url(tweet, format: :json)
end

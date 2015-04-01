# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
Portfolio.destroy_all
Rule.destroy_all
Stock.destroy_all
puts "Creating 5 users"
1.upto(5) do |i|
	u= User.create(user_name: "user#{i}" ,password: "password", email: Faker::Internet.email)
	portfolio = Portfolio.new
     portfolio[:user_id] = u.id
      portfolio.save

end

puts "Creating 1 admin"
u= User.create(user_name: "admin1" ,password: "password", email: Faker::Internet.email, admin: true)


puts "Creating 10 stocks"
Stock.create(stock_name: "Apple" ,stock_symbol: "AAPL")
Stock.create(stock_name: "Google" ,stock_symbol: "GOOG")
Stock.create(stock_name: "Microsoft" ,stock_symbol: "MSFT")
Stock.create(stock_name: "3M" ,stock_symbol: "MMM")
Stock.create(stock_name: "American Express" ,stock_symbol: "AXP")
Stock.create(stock_name: "Boeing" ,stock_symbol: "BA")
Stock.create(stock_name: "Caterpillar" ,stock_symbol: "CAT")
Stock.create(stock_name: "Chevron" ,stock_symbol: "CVX")
Stock.create(stock_name: "Cisco" ,stock_symbol: "CSCO")
Stock.create(stock_name: "Coca-Coca" ,stock_symbol: "KO")




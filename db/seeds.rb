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
puts "Creating 5 users"
1.upto(5) do |i|
	u= User.create(user_name: "user#{i}" ,password: "password", email: Faker::Internet.email)
	portfolio = Portfolio.new
     portfolio[:user_id] = u.id
      portfolio.save

end

puts "Creating 1 admin"
u= User.create(user_name: "admin1" ,password: "password", email: Faker::Internet.email, admin: true)



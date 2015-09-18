Presentation about project: https://docs.google.com/presentation/d/1GnuKy3RHoFy4bzSA7qmvgtI5-XvqEJcerau3qYhhCzI/edit?usp=sharing

Market Watch: Get real time custom stock market notifications

Team Members: Arya Boudaie, Shraddha Basnyat, Subahu Rayamajhi, Daniel Fiterman

![img1](http://i.imgur.com/JYl2z9j.png)
![img2](http://i.imgur.com/fPo2lhl.png)
![img3](http://i.imgur.com/gdwlikj.png)
![img4](http://i.imgur.com/bqgYiSJ.png)
![img5](http://i.imgur.com/RtiL0W7.png)
![img6](http://i.imgur.com/oZYnUDO.png)
![img7](http://i.imgur.com/Kr8Ux6G.png)
![img8](http://i.imgur.com/iSw4wsH.png)
![img9](http://i.imgur.com/v9e23Rb.png)

What's happening in the financial markets? Monitor your portfolio and get real time alerts on quantitative data(last trade price) and qualitative data through twitter sentiment analysis.

Audience:
* Advanced amateur investors, someone who knows what’s going but does not do this full-time
* People who don’t have time to constantly check the news/market prices.

Features:
* Manage/track portfolio
* Sentiment analysis of Tweets
* Get alerts based on custom rules for the stocks
 * Rules based on last trade price and twitter sentiment
 * View custom stock graphs based on your portfolio, stocks, and rules
* RSS news feed 

Technologies Used:
* Ruby on Rails Framework
* Yahoo Finance API
* Twitter API
* Google Charts
* Suckerpunch background processing
* Pusher, Actionmailer and Slack notifications



Now running on codeship!

![badge](https://codeship.com/projects/1a2def90-c4f3-0132-ed41-32942c6ecf59/status?branch=master)

Directions for running project:

1. Simply clone the git repo (make sure rails and ruby are installed)
2. Run 'bundle install' in the project directory
3. Run 'rake db:migrate' (this runs the database migrations)
4. Run 'rake db:seed' (this puts in sample data like sample user accounts with some preloaded stocks)
5. Run 'rails server' and go to your brower and type in 'localhost:3000/login'
6. You should see the login page, from there login with a usename of 'user1' and a password 'password'


You can see your portfolio by clicking on the portfolios tab
On the page you will see two fields. The first one will be called 'stock name' , while the second will be called 'stock_symbol'. The former can be named whatever you want it to be named and the latter has be the correct symbol of the stock you want. For example I can have "stock name: Google stock symbol GOOG" or "stock name: foo stock symbol GOOG". Both will work but "stock name: Google stock symbol: foo" will fail.

Clicking show graph on a investment and refreshing the page will display a graph of the price history of the stock.



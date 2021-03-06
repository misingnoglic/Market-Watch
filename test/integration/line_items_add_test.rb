require 'test_helper'

class LineItemsAddTest < ActionDispatch::IntegrationTest
 test 'adds_line_item_in_view' do
    bob = User.create!(user_name: "bob" ,password: "password", email: "dfit99@brandeis.edu")
   goog = Stock.create!(stock_symbol: 'GOOG')



   
   
   login(bob.id)
   #u.browses_site
   
   
   

 end

private
 
    module CustomDsl
      def browses_site
        get "/line_items/index"
        assert_response :success
        assert assigns(:products)
      end
    end
 
    def login(user)
      open_session do |sess|
        sess.extend(CustomDsl)
        u = User.find(user)
        sess.https!
        assert_equal u.user_name , 'bob'
        begin
        sess.post "/login/", user_name: u.user_name, password: u.password
        rescue 
        #error indicates it hit the login page successfully but cant load due to lacking session helpers
        end
        
        sess.https!(false)
      end
    
    
end

end

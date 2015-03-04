require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "user attributes must not be empty" do
      user = User.new
      assert user.invalid?
      assert user.errors[:user_name].any?
      assert user.errors[:password_digest].any?
      assert user.errors[:email].any?
  end

  test "user is not valid without a unique email" do
    user = User.new(email: users(:one).email,
    user_name: "yyy",
    password_digest: "hahahahahah")
    assert !user.save
    assert_equal "has already been taken", user.errors[:email].join('; ') 
  end

  test "user is not valid without password_digest length 6 to 20 characters" do
    user = User.new(user_name: "xxxxxx",
    email: "xxxxxx@gmail.com")
    
    user.password_digest = "12345"
    user.invalid?
    assert_equal "is too short (minimum is 6 characters)",
    user.errors[:password_digest].join('; ')

    user.password_digest = "012345678901234567890"
    user.invalid?
    assert_equal "is too long (maximum is 20 characters)",
    user.errors[:password_digest].join('; ')

    user.password_digest = "1234567"
    assert user.valid?
  end

  test "There cannot be less one available user" do
      user = User.new(user_name: "xxxxxx",
      email: "xxxxxx@gmail.com")
      user.password_digest = "123456"
      user.save
      assert_equal 3 , User.count
  
  end 
   

  
end

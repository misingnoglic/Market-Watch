require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "user attributes must not be empty" do
      user = User.new
      assert user.invalid?
      assert user.errors[:user_name].any?
      assert user.errors[:password].any?
      assert user.errors[:email].any?
  end

  test "user is not valid without a unique email" do
    user = User.new(email: users(:one).email,
    user_name: "yyy",
    password: "hahahahahah")
    assert !user.save
    assert_equal "has already been taken", user.errors[:email].join('; ') 
  end

  
end

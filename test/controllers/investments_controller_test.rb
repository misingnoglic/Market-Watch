require 'test_helper'

class InvestmentsControllerTest < ActionController::TestCase
  setup do
    @investment = investments(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:investments)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create investment" do
    assert_difference('Investment.count') do
      post :create, investment: {  price: @investment. price, time: @investment.time }
    end

    assert_redirected_to investment_path(assigns(:investment))
  end

  test "should show investment" do
    get :show, id: @investment
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @investment
    assert_response :success
  end

  test "should update investment" do
    patch :update, id: @investment, investment: {  price: @investment. price, time: @investment.time }
    assert_redirected_to investment_path(assigns(:investment))
  end

  test "should destroy investment" do
    assert_difference('Investment.count', -1) do
      delete :destroy, id: @investment
    end

    assert_redirected_to investments_path
  end
end

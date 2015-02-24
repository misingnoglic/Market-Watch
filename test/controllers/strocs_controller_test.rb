require 'test_helper'

class StrocsControllerTest < ActionController::TestCase
  setup do
    @stroc = strocs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:strocs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create stroc" do
    assert_difference('Stroc.count') do
      post :create, stroc: {  name: @stroc. name, symbol: @stroc.symbol }
    end

    assert_redirected_to stroc_path(assigns(:stroc))
  end

  test "should show stroc" do
    get :show, id: @stroc
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @stroc
    assert_response :success
  end

  test "should update stroc" do
    patch :update, id: @stroc, stroc: {  name: @stroc. name, symbol: @stroc.symbol }
    assert_redirected_to stroc_path(assigns(:stroc))
  end

  test "should destroy stroc" do
    assert_difference('Stroc.count', -1) do
      delete :destroy, id: @stroc
    end

    assert_redirected_to strocs_path
  end
end

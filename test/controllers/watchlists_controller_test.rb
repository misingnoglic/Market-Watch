require 'test_helper'

class WatchlistsControllerTest < ActionController::TestCase
  setup do
    @watchlist = watchlists(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:watchlists)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create watchlist" do
    assert_difference('Watchlist.count') do
      post :create, watchlist: {  }
    end

    assert_redirected_to watchlist_path(assigns(:watchlist))
  end

  test "should show watchlist" do
    get :show, id: @watchlist
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @watchlist
    assert_response :success
  end

  test "should update watchlist" do
    patch :update, id: @watchlist, watchlist: {  }
    assert_redirected_to watchlist_path(assigns(:watchlist))
  end

  test "should destroy watchlist" do
    assert_difference('Watchlist.count', -1) do
      delete :destroy, id: @watchlist
    end

    assert_redirected_to watchlists_path
  end
end

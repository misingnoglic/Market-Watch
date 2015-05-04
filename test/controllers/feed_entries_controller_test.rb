require 'test_helper'

class FeedEntriesControllerTest < ActionController::TestCase
  setup do
    @feed_entry = feed_entries(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:feed_entries)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create feed_entry" do
    assert_difference('FeedEntry.count') do
      post :create, feed_entry: { description: @feed_entry.description, guid: @feed_entry.guid, link: @feed_entry.link, published_at: @feed_entry.published_at, stock_id: @feed_entry.stock_id, title: @feed_entry.title }
    end

    assert_redirected_to feed_entry_path(assigns(:feed_entry))
  end

  test "should show feed_entry" do
    get :show, id: @feed_entry
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @feed_entry
    assert_response :success
  end

  test "should update feed_entry" do
    patch :update, id: @feed_entry, feed_entry: { description: @feed_entry.description, guid: @feed_entry.guid, link: @feed_entry.link, published_at: @feed_entry.published_at, stock_id: @feed_entry.stock_id, title: @feed_entry.title }
    assert_redirected_to feed_entry_path(assigns(:feed_entry))
  end

  test "should destroy feed_entry" do
    assert_difference('FeedEntry.count', -1) do
      delete :destroy, id: @feed_entry
    end

    assert_redirected_to feed_entries_path
  end
end

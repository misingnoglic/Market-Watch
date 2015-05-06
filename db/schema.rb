# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150506034441) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "feed_entries", force: :cascade do |t|
    t.text     "title"
    t.text     "description"
    t.string   "link"
    t.datetime "published_at"
    t.string   "guid"
    t.integer  "stock_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "last_price_rules", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "line_items", force: :cascade do |t|
    t.integer  "stock_id"
    t.integer  "portfolio_id"
    t.integer  "number_shares", default: 1
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "notifications", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean  "seen"
    t.text     "content"
    t.text     "symbol"
    t.integer  "rule_id"
  end

  add_index "notifications", ["rule_id"], name: "index_notifications_on_rule_id", using: :btree

  create_table "portfolios", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
  end

  add_index "portfolios", ["user_id"], name: "index_portfolios_on_user_id", using: :btree

  create_table "rules", force: :cascade do |t|
    t.float    "target_price"
    t.integer  "user_id"
    t.integer  "stock_id"
    t.integer  "last_fired"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "type"
    t.string   "compare_type"
  end

  create_table "sentiment_rules", force: :cascade do |t|
    t.string   "rails"
    t.string   "s"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "settings", force: :cascade do |t|
    t.string   "var",         null: false
    t.text     "value"
    t.integer  "target_id",   null: false
    t.string   "target_type", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "settings", ["target_type", "target_id", "var"], name: "index_settings_on_target_type_and_target_id_and_var", unique: true, using: :btree

  create_table "stock_histories", force: :cascade do |t|
    t.string   "stock_symbol"
    t.float    "last_trade_price"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.float    "sentiment_score",  default: 0.0
  end

  create_table "stocks", force: :cascade do |t|
    t.string   "stock_name"
    t.string   "stock_symbol"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.float    "last_trade_price", default: 0.0
    t.float    "percent_change",   default: 0.0
    t.text     "sentiment"
    t.float    "sentiment_score"
  end

  create_table "tweets", force: :cascade do |t|
    t.text     "screen_name"
    t.text     "content"
    t.text     "sentiment"
    t.float    "sentiment_score"
    t.integer  "stock_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.datetime "tweeted_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "user_name"
    t.string   "password_digest"
    t.string   "email"
    t.boolean  "admin",           default: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

  add_foreign_key "notifications", "rules"
end

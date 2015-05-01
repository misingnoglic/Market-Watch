require 'rule_engine'
require 'yahoofinance'

class RulesController < ApplicationController
  before_action :set_rule, only: [:show, :edit, :update, :destroy]


  # GET /rules
  # GET /rules.json
  def index
    @user = current_user
    @rules = @user.rules
  end

  # GET /rules/1
  # GET /rules/1.json
  def show
    @user = current_user
  end

  # GET /rules/new
  def new
    @user = current_user
    @rule = Rule.new
  end

  # GET /rules/1/edit
  def edit
  end

  # POST /rules
  # POST /rules.json
  def create
   

    @user = current_user
    @stock = Stock.find_by_stock_symbol(params[:rule][:stock_symbol])
    @rule = LastPriceRule.create(rule_params)
    @rule[:user_id] = @user.id
    @rule[:stock_id] = @stock.id
    @user.save
    @stock.save
    

    respond_to do |format|
      if @rule.save
        format.html { redirect_to rules_url, notice: 'Rule was successfully created.' }
        format.json { render :show, status: :created, location: @rule }
        @user.save
      else
        format.html { render :new }
        format.json { render json: @rule.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /rules/1
  # PATCH/PUT /rules/1.json
  def update
    respond_to do |format|
      if @rule.update(rule_params)
        format.html { redirect_to @rule, notice: 'Rule was successfully updated.' }
        format.json { render :show, status: :ok, location: @rule }
      else
        format.html { render :edit }
        format.json { render json: @rule.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rules/1
  # DELETE /rules/1.json
  def destroy
    @rule.destroy
    respond_to do |format|
      format.html { redirect_to rules_url, notice: 'Rule was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rule
      @rule = Rule.find(params[:id])
      @user = current_user
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def rule_params
      params.require(:rule).permit(:target_price, :user_id, :stock_id, :stock_symbol)
    end
end

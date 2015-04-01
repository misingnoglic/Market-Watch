require 'rule_engine'
require 'yahoofinance'

class RulesController < ApplicationController
  before_action :set_rule, only: [:show, :edit, :update, :destroy]


  # GET /rules
  # GET /rules.json
  def index
    @portfolio = current_portfolio
    ::RuleEngine.start
    @rules = Rule.all
  end

  # GET /rules/1
  # GET /rules/1.json
  def show
    @portfolio = current_portfolio
  end

  # GET /rules/new
  def new
    @portfolio = current_portfolio
    @rule = Rule.new
  end

  # GET /rules/1/edit
  def edit
  end

  # POST /rules
  # POST /rules.json
  def create
   

    @portfolio = current_portfolio
    @stock = Stock.find_by_stock_symbol(params[:rule][:stock_symbol])
    @rule = Rule.create(rule_params)
    @rule[:portfolio_id] = @portfolio.id
    @rule[:stock_id] = @stock.id
    @portfolio.save
    @stock.save
    

    respond_to do |format|
      if @rule.save
        format.html { redirect_to @rule, notice: 'Rule was successfully created.' }
        format.json { render :show, status: :created, location: @rule }
        @portfolio.save
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
      @portfolio = current_portfolio
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def rule_params
      params.require(:rule).permit(:target_price, :portfolio_id, :stock_id, :stock_symbol)
    end
end

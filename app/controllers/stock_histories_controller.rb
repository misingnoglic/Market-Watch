class StockHistoriesController < ApplicationController
  before_action :set_stock_history, only: [:show, :edit, :update, :destroy]

  # GET /stock_histories
  # GET /stock_histories.json
  def index
    @stock_histories = StockHistory.all
  end

  # GET /stock_histories/1
  # GET /stock_histories/1.json
  def show
  end

  # GET /stock_histories/new
  def new
    @stock_history = StockHistory.new
  end

  # GET /stock_histories/1/edit
  def edit
  end

  # POST /stock_histories
  # POST /stock_histories.json
  def create
    @stock_history = StockHistory.new(stock_history_params)

    respond_to do |format|
      if @stock_history.save
        format.html { redirect_to @stock_history, notice: 'Stock history was successfully created.' }
        format.json { render :show, status: :created, location: @stock_history }
      else
        format.html { render :new }
        format.json { render json: @stock_history.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stock_histories/1
  # PATCH/PUT /stock_histories/1.json
  def update
    respond_to do |format|
      if @stock_history.update(stock_history_params)
        format.html { redirect_to @stock_history, notice: 'Stock history was successfully updated.' }
        format.json { render :show, status: :ok, location: @stock_history }
      else
        format.html { render :edit }
        format.json { render json: @stock_history.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stock_histories/1
  # DELETE /stock_histories/1.json
  def destroy
    @stock_history.destroy
    respond_to do |format|
      format.html { redirect_to stock_histories_url, notice: 'Stock history was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stock_history
      @stock_history = StockHistory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def stock_history_params
      params.require(:stock_history).permit(:stock_symbol, :last_trade_price, :sentiment_score)
    end

  require 'json'



end

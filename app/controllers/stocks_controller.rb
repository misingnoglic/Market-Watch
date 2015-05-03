#require 'yahoofinance'
  require 'update_stocks'
class StocksController < ApplicationController
    helper_method :sort_column, :sort_direction
    before_action :set_stock, only: [:show, :edit, :update, :destroy]
    
  # GET /stocks
  # GET /stocks.json
  def index
    @stocks = Stock.order(sort_column + " " + sort_direction)
  end

  # GET /stocks/1
  # GET /stocks/1.json
  def show
  end



  # GET /stocks/new
  def new
    @stock = Stock.new
  end

  # GET /stocks/1/edit
  def edit
  end

  # POST /stocks
  # POST /stocks.json
  def create
    @stock = Stock.new(stock_params)
    @stock[:sentiment_score] = @stock.getSentimentScore 
    respond_to do |format|
      if @stock.save
        format.html { redirect_to @stock, notice: 'Stock was successfully created.' }
        format.json { render :show, status: :created, location: @stock }
      else
        format.html { render :new }
        format.json { render json: @stock.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stocks/1
  # PATCH/PUT /stocks/1.json
  def update
    respond_to do |format|
      if @stock.update(stock_params)
        format.html { redirect_to @stock, notice: 'Stock was successfully updated.' }
        format.json { render :show, status: :ok, location: @stock }
      else
        format.html { render :edit }
        format.json { render json: @stock.errors, status: :unprocessable_entity }
      end
    end
  end


  # DELETE /stocks/1
  # DELETE /stocks/1.json
  def destroy
    @stock.destroy
    respond_to do |format|
      format.html { redirect_to stocks_url, notice: 'Stock was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stock
      @stock = Stock.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def stock_params
      params.require(:stock).permit(:stock_name, :stock_symbol, :last_trade_price, :percent_change)
    end

    # method for default sort
    def sort_column
      Stock.column_names.include?(params[:sort]) ? params[:sort] : "stock_name"
    end

    # method for default direction
    def sort_direction
      %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
    end


end

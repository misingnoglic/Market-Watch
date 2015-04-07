class LineItemsController < ApplicationController
  before_action :set_line_item, only: [:show, :edit, :update, :destroy]

  # GET /line_items
  # GET /line_items.json
  def index
    @line_items = LineItem.all
  end

  # GET /line_items/1
  # GET /line_items/1.json
  def show
  end

  # GET /line_items/new
  def new
    @line_item = LineItem.new
  end

  # GET /line_items/1/edit
  def edit
  end

  # POST /line_items
  # POST /line_items.json
  def create
    @portfolio = current_portfolio
    stock_s = params[:stock_symbol]
    begin
      stock =Stock.find_by!(stock_symbol: stock_s)
    rescue ActiveRecord::RecordNotFound
      new_params = ActionController::Parameters.new ( {stock:  {stock_name: params[:stock_name], stock_symbol: params[:stock_symbol]}})
      stock = Stock.new(stock_params(new_params))
      stock.save
    end
    @line_item = @portfolio.add_product(stock[:id])
    @line_item.save

     
    respond_to do |format|
      if @line_item.save
        format.html { redirect_to @line_item.portfolio, notice: 'Line item was successfully created.' }
        format.json { render  @line_item, status: :created, location: @line_item }
      else
        format.html { render :new }
        format.json { render json: @line_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /line_items/1
  # PATCH/PUT /line_items/1.json
  def update
    respond_to do |format|
      if @line_item.update(line_item_params)
        format.html { redirect_to @line_item, notice: 'Line item was successfully updated.' }
        format.json { render :show, status: :ok, location: @line_item }
      else
        format.html { render :edit }
        format.json { render json: @line_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /line_items/1
  # DELETE /line_items/1.json
  def destroy
    curr_portfolio = @line_item.portfolio
    @line_item.destroy
    respond_to do |format|
      format.html { redirect_to curr_portfolio, notice: 'Line item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_line_item
      @line_item = LineItem.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def line_item_params
      params.require(:line_item).permit(:stock_id, :portfolio_id)
    end
end
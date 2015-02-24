class StrocsController < ApplicationController
  before_action :set_stroc, only: [:show, :edit, :update, :destroy]

  # GET /strocs
  # GET /strocs.json
  def index
    @strocs = Stroc.all
  end

  # GET /strocs/1
  # GET /strocs/1.json
  def show
  end

  # GET /strocs/new
  def new
    @stroc = Stroc.new
  end

  # GET /strocs/1/edit
  def edit
  end

  # POST /strocs
  # POST /strocs.json
  def create
    @stroc = Stroc.new(stroc_params)

    respond_to do |format|
      if @stroc.save
        format.html { redirect_to @stroc, notice: 'Stroc was successfully created.' }
        format.json { render :show, status: :created, location: @stroc }
      else
        format.html { render :new }
        format.json { render json: @stroc.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /strocs/1
  # PATCH/PUT /strocs/1.json
  def update
    respond_to do |format|
      if @stroc.update(stroc_params)
        format.html { redirect_to @stroc, notice: 'Stroc was successfully updated.' }
        format.json { render :show, status: :ok, location: @stroc }
      else
        format.html { render :edit }
        format.json { render json: @stroc.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /strocs/1
  # DELETE /strocs/1.json
  def destroy
    @stroc.destroy
    respond_to do |format|
      format.html { redirect_to strocs_url, notice: 'Stroc was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stroc
      @stroc = Stroc.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def stroc_params
      params.require(:stroc).permit(: name, :symbol)
    end
end

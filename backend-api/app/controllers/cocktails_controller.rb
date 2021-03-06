class CocktailsController < ApplicationController
    before_action :set_cocktail, only: [:show, :update, :destroy]
    def index
        @cocktails = Cocktail.all
        render json: @cocktails, :except => [:created_at, :updated_at], :include => [:ingredients]
    end

    def show
        render json: @cocktail
    end

    def create
        @cocktail = Cocktail.new(cocktail_params)
        if @cocktail.save
            render json: @cocktail, :except => [:created_at, :updated_at], :include => [:ingredients]
        else
            render json: @cocktail.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        if @cocktail.update(cocktail_params)
            render json: @cocktail, :except => [:created_at, :updated_at], :include => [:ingredients]
        else
            render json: @cocktail.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @cocktail.destroy
    end

    private
        def set_cocktail
            @cocktail = Cocktail.find(params[:id])
        end

        def cocktail_params
            params.require(:cocktail).permit(:name, :description, :ingredient_ids => [])
        end
end

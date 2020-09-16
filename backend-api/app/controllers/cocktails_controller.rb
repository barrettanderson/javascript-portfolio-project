class CocktailsController < ApplicationController
    before_action :set_cocktail, only: [:show, :update, :destroy]
    def index
        @cocktails = Cocktail.all
        render json: @cocktails, :except => [:created_at, :updated_at]
            # :include => {:mixers => {:include => :ingredients => {:except => [:created_at, :updated_at]}, :except => [:created_at, :updated_at]} :except => [:ablkahbfliAJWLDF]
    end

    def show
        render json: @animal
    end

    def create
        @cocktail = Cocktail.new(cocktail_params)
        if @cocktail.save
            render json: @cocktail
        else
            render json: @cocktail.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        if @cocktail.update(cocktail_params)
            render json: @cocktail
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
            params.require(:cocktail).permit(:name, :description)
        end
end

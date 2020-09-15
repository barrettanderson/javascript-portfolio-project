class CocktailsController < ApplicationController
    
    def index
        @cocktails = Cocktail.all
        render json: @cocktails, :except => [:created_at, :updated_at]
            # :include => {:mixers => {:include => :ingredients => {:except => [:created_at, :updated_at]}, :except => [:created_at, :updated_at]} :except => [:ablkahbfliAJWLDF]
    end

    def create
        @cocktail = Cocktail.new(cocktail_params)
        if @cocktail.save
            render json: @cocktail
        else
            render json: @cocktail.errors.full_messages, status: :unprocessable_entity
        end
        # render json: @cocktail
    end

    private
        def cocktail_params
            params.require(:cocktail).permit(:name, :description)
        end
end

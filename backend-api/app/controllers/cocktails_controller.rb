class CocktailsController < ApplicationController
    
    def index
        @cocktails = Cocktail.all
        render json: @cocktails
    end

    def create
        @cocktail = Cocktail.new(cocktail_params)
        # if @cocktail.save
        #     render :json @cocktail, status: created
        # else
        #     render :json @cocktail.errors.full_messages, status: :unprocessable_entity
        # end
        render @cocktail
    end

    private
        def cocktail_params
            params.require(:cocktail).permit(:name, :description)
        end
end

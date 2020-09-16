class IngredientsController < ApplicationController
    before_action :set_ingredient, only: [:show, :update, :destroy]
    
    def index
        @ingredients = Ingredient.all
        render json: @ingredients, :except => [:created_at, :updated_at]
    end

    def create
        # findorcreateby(params:name)
        @ingredient = Ingredient.find_or_create_by_name(ingredient_params)
        if @ingredient.save || @ingredient
            render json: @ingredient
        else
            render json: @ingredient.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
        def set_ingredient
            @ingredient = Ingredient.find(params[:id])
        end

        def ingredient_params
            params.require(:ingredient).permit(:name)
        end

end

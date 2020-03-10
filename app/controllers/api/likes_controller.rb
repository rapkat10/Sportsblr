class Api::LikesController < ApplicationController

    # before_action :require_logged_in

    def create
        @like = Like.new()
        @like.post_id = params[:post_id]
        @like.user_id = current_user.id

        if @like.save
            render 'api/likes/show'
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy!
        render 'api/likes/show'
    end

end
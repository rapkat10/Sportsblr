class Api::LikesController < ApplicationController

    def create
        like = Like.new()
        like.post_id = params[:post_id]
        like.user_id = current_user.id
        @post = Post.find(params[:post_id])
        if like.save
            render 'api/posts/show'
        else
            render json: like.errors.full_messages, status: 422
        end
    end

    def destroy
        like = Like.find(params[:id])
        like.destroy!
        @post = Post.find(params[:post_id])
        render 'api/posts/show'
    end

end